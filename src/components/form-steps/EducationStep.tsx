import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface EducationStepProps {
  form: UseFormReturn<any>;
}

export function EducationStep({ form }: EducationStepProps) {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="academicYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Are you currently a student?</FormLabel>
            <Select 
              onValueChange={(value) => {
                setIsStudent(value === "yes");
                field.onChange(value);
              }} 
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes, I'm a student</SelectItem>
                <SelectItem value="no">No, I'm not currently studying</SelectItem>
                <SelectItem value="planning">Planning to start studies soon</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {isStudent && (
        <>
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
            name="gpaRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GPA Range (Optional)</FormLabel>
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
                    <SelectItem value="not-applicable">Not Applicable</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}

      {!isStudent && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-700 text-sm">
            Even if you're not currently studying, you may still qualify for certain grants and financial aid programs 
            for prospective students or career changers.
          </p>
        </div>
      )}
    </div>
  );
}
