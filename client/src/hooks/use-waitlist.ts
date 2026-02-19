import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Mock schema for client-only version
const insertWaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistInput = z.infer<typeof insertWaitlistSchema>;

export function useJoinWaitlist() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: WaitlistInput) => {
      // Validate input
      const validated = insertWaitlistSchema.parse(data);
      
      // Mock API call - just log to console for now
      console.log("Waitlist signup:", validated);
      
      // Simulate successful response
      return { success: true, email: validated.email };
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
