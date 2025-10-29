import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentForm } from "@/components/AssessmentForm";
import { GraduationCap, Shield, TrendingUp, Users, DollarSign, Award, BookOpen, CheckCircle } from "lucide-react";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Maximize Your Student Benefits
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover all grants, scholarships and financial aid programs you qualify for
          </p>
          <Button onClick={scrollToForm} size="lg" className="text-lg px-8 py-6">
            Start Free Assessment
          </Button>
          <div className="mt-8 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>No Credit Check</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We analyze your unique situation to identify every grant, scholarship, and aid program you qualify for.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our education advisors guide you through the application process for maximum success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maximize Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students using our service secure an average of $12,000 more in financial aid.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Aid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Aid Available</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Federal Grants", description: "Pell Grants, FSEOG, and more - no repayment required" },
              { icon: GraduationCap, title: "Scholarships", description: "Merit and need-based scholarships from thousands of sources" },
              { icon: BookOpen, title: "State Programs", description: "State-specific financial aid and tuition assistance" },
              { icon: Users, title: "Work-Study", description: "Part-time employment opportunities on campus" },
              { icon: DollarSign, title: "Institutional Aid", description: "University and college-specific financial assistance" },
              { icon: Shield, title: "Special Programs", description: "Military, minority, and career-specific grants" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Form Section */}
      <section id="assessment-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Financial Profile Assessment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete this free assessment to discover all the financial aid opportunities available to you
            </p>
          </div>
          <AssessmentForm />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                university: "State University",
                amount: "$18,500",
                text: "I discovered grants I never knew existed. The service helped me secure funding that made college affordable."
              },
              {
                name: "Michael Chen",
                university: "Tech Institute",
                amount: "$22,000",
                text: "The personalized guidance was invaluable. I received aid from multiple sources I wouldn't have found alone."
              },
              {
                name: "Emily Rodriguez",
                university: "Community College",
                amount: "$12,800",
                text: "As a first-generation student, this service helped me navigate the financial aid process with confidence."
              },
            ].map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.university}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{story.amount} in aid</p>
                  <p className="text-sm text-muted-foreground italic">"{story.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Privacy-First Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>No Credit Check Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Education Advisory Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2024 Student Financial Navigator. Educational Advisory Service.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
