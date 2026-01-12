"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  reason: z.string().optional(),
  category: z.string().optional(),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const REASONS = [
  "To avoid misunderstandings later",
  "To answer client or platform questions quickly",
  "To feel more organized and professional",
  "To protect myself without sounding aggressive",
  "I'm mostly curious right now",
];

const CATEGORIES = [
  "Architecture/Interiors",
  "Hospitality/Hotels",
  "Editorial",
  "Commercial/Brand",
  "Stock",
  "Other",
];

export function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("You're on the list.");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      reason: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSuccess(true);
      if (result.message) {
        setSuccessMessage(result.message);
      }
      // Delay showing follow-up slightly for better UX
      setTimeout(() => setShowFollowUp(true), 500);
    } catch (error) {
      console.error(error);
      alert("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherValue, setOtherValue] = useState("");

  const handleCategorySelect = async (category: string) => {
    if (category === "Other") {
      setShowOtherInput(true);
      return;
    }
    await submitCategory(category);
  };

  const submitOther = async () => {
    if (!otherValue.trim()) return;
    await submitCategory(`Other: ${otherValue.trim()}`);
  };

  const submitCategory = async (category: string) => {
    const email = watch("email");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, category }),
      });
    } catch {
      // ignore
    }
    setShowFollowUp(false);
    setSuccessMessage("Thanks for sharing!");
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="p-6 bg-green-50 rounded-lg border border-green-100">
          <h3 className="text-xl font-medium text-green-900 mb-2">
            {successMessage}
          </h3>
          <p className="text-green-700">We&apos;ll keep you posted.</p>
        </div>

        <AnimatePresence>
          {showFollowUp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 text-left"
            >
              <p className="text-sm font-medium text-slate-600 text-center">
                Quick question: What kind of photography do you license most?
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className="p-2 text-xs md:text-sm bg-white border border-slate-200 rounded-md hover:border-slate-400 hover:bg-slate-50 transition-all text-slate-700"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* "Other" Text Input Overlay */}
              {showOtherInput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-4 rounded-lg border border-slate-200"
                >
                  <h4 className="text-sm font-medium text-slate-700 mb-3">
                    What kind of photography?
                  </h4>
                  <div className="flex w-full gap-2">
                    <Input
                      value={otherValue}
                      onChange={(e) => setOtherValue(e.target.value)}
                      placeholder="e.g. Fine Art, Landscape..."
                      className="h-9 text-sm"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          submitOther();
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      onClick={submitOther}
                      disabled={!otherValue.trim()}
                    >
                      Save
                    </Button>
                  </div>
                  <button
                    onClick={() => setShowOtherInput(false)}
                    className="text-xs text-slate-400 mt-3 hover:text-slate-600 underline"
                  >
                    Cancel
                  </button>
                </motion.div>
              )}

              {!showOtherInput && (
                <button
                  onClick={() => setShowFollowUp(false)}
                  className="text-xs text-slate-400 underline w-full text-center hover:text-slate-600"
                >
                  Skip
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm mx-auto"
    >
      <div className="space-y-1">
        <Input
          {...register("email")}
          type="email"
          placeholder="name@studio.com"
          error={errors.email?.message}
          className="bg-white"
        />
        <input
          type="text"
          {...register("honeypot")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-slate-600 font-medium pl-1">
          Main reason?{" "}
          <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <div className="relative">
          <select
            {...register("reason")}
            className="w-full h-11 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 appearance-none cursor-pointer"
          >
            <option value="">Select a reason...</option>
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          "Join the waitlist"
        )}
      </Button>
      <p className="text-center text-xs text-slate-400 mt-4">
        No spam. No pressure. Early updates only.
      </p>
    </form>
  );
}
