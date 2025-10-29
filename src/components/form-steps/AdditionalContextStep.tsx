import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AdditionalContextStepProps {
  form: UseFormReturn<any>;
}

export function AdditionalContextStep({ form }: AdditionalContextStepProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="specialCircumstances"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Special Circumstances (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Any special circumstances that might affect your financial aid eligibility (e.g., family hardship, disability, unique situation)..."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              This information helps us identify additional aid programs you may qualify for
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="careerGoals"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Career Goals</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your career aspirations after graduation..."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Some grants are specific to certain career paths
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="contactMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Preferred Contact Method</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="email" />
                  </FormControl>
                  <FormLabel className="font-normal">Email</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="phone" />
                  </FormControl>
                  <FormLabel className="font-normal">Phone</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="both" />
                  </FormControl>
                  <FormLabel className="font-normal">Both</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
