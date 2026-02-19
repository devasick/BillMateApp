import { useMutation } from "@tanstack/react-query";
import { api, type insertWaitlistSchema } from "@shared/routes";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

type WaitlistInput = z.infer<typeof insertWaitlistSchema>;

export function useJoinWaitlist() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: WaitlistInput) => {
      // Validate input before sending
      const validated = api.waitlist.join.input.parse(data);
      
      const res = await fetch(api.waitlist.join.path, {
        method: api.waitlist.join.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Invalid email address");
        }
        throw new Error("Something went wrong. Please try again.");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as BillMate is ready.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error joining waitlist",
        description: error.message,
      });
    },
  });
}
