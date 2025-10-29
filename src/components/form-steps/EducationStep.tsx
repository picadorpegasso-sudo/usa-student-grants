import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EducationStepProps {
  form: UseFormReturn<any>;
}

export function EducationStep({ form }: EducationStepProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="university"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current University/College</FormLabel>
            <FormControl>
              <Input placeholder="Harvard University" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="fieldOfStudy"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Field of Study</FormLabel>
            <FormControl>
              <Input placeholder="Computer Science" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="academicYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Academic Year</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="freshman">Freshman (1st year)</SelectItem>
                <SelectItem value="sophomore">Sophomore (2nd year)</SelectItem>
                <SelectItem value="junior">Junior (3rd year)</SelectItem>
                <SelectItem value="senior">Senior (4th year)</SelectItem>
                <SelectItem value="graduate">Graduate Student</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="gpaRange"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GPA Range</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your GPA range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="4.0">4.0 (Perfect)</SelectItem>
                <SelectItem value="3.5-3.9">3.5 - 3.9</SelectItem>
                <SelectItem value="3.0-3.4">3.0 - 3.4</SelectItem>
                <SelectItem value="2.5-2.9">2.5 - 2.9</SelectItem>
                <SelectItem value="2.0-2.4">2.0 - 2.4</SelectItem>
                <SelectItem value="below-2.0">Below 2.0</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
