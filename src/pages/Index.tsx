import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentForm } from "@/components/AssessmentForm";
import { GraduationCap, Shield, TrendingUp, Users, DollarSign, Award, BookOpen, CheckCircle, Mail, Phone, FileCheck, X } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [metrics, setMetrics] = useState({
    liveUsers: 12,
    approvedToday: 47,
    totalApproved: 12473
  });

  useEffect(() => {
    // Фейковые метрики в реальном времени
    const interval = setInterval(() => {
      setMetrics(prev => ({
        liveUsers: Math.max(8, prev.liveUsers + Math.floor(Math.random() * 5) - 2),
        approvedToday: prev.approvedToday + Math.floor(Math.random() * 3),
        totalApproved: prev.totalApproved + Math.floor(Math.random() * 8)
      }));
    }, 15000);

    // Фейковые уведомления
    const notificationInterval = setInterval(() => {
      const notifications = [
        "Sarah from NY just secured $12,500",
        "Michael from CA approved for $8,200", 
        "Emily from TX received $15,000 grant",
        "James from FL qualified for $7,800 aid",
        "Jessica from IL got $11,200 scholarship"
      ];
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      
      // Создаем фейковое уведомление
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-right duration-300';
      notification.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-sm">${randomNotif}</span>
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 5000);
    }, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(notificationInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Фейковые Live метрики */}
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-3 rounded-lg shadow-lg z-40 border">
        <div className="text-xs space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span><strong>{metrics.liveUsers}</strong> users online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span><strong>{metrics.approvedToday}</strong> approved today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span><strong>{metrics.totalApproved.toLocaleString()}</strong> total approved</span>
          </div>
        </div>
      </div>

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
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@studentgrantadvisor.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (888) 734-EDU1</span>
                </div>
                <div>123 Education Boulevard, Suite 500</div>
                <div>Washington, D.C. 20001</div>
                <div>Monday-Friday 8:00 AM - 8:00 PM EST</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Student Financial Navigator is an independent educational advisory service dedicated to helping students maximize their financial aid opportunities.
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>🔒 256-bit SSL</span>
                <span>📋 FERPA Compliant</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveModal('privacy')}
                  className="block text-primary hover:underline text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setActiveModal('terms')}
                  className="block text-primary hover:underline text-sm transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setActiveModal('contact')}
                  className="block text-primary hover:underline text-sm transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div>🏛️ Authorized Federal Partner</div>
                <div>💳 PCI DSS Certified</div>
                <div>🎓 Certified Education Advisors</div>
                <div>🔐 Bank-Level Encryption</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Student Financial Navigator. Educational Advisory Service. All rights reserved.</p>
            <p className="mt-2 text-xs">Student Financial Navigator is an independent service and not affiliated with the U.S. Department of Education.</p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Privacy Policy</h3>
                <button onClick={() => setActiveModal(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4 text-sm">
              <p>Student Financial Navigator operates the Student Financial Navigator platform, which provides educational advisory services. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
              
              <h4 className="font-semibold mt-4">Information Collection And Use</h4>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you. This includes personally identifiable information such as name, email address, telephone number, Social Security number, date of birth, physical address, educational history, financial information, and banking details necessary for financial aid assessment purposes.</p>

              <h4 className="font-semibold mt-4">Types of Data Collected</h4>
              <p>Personal Data including but not limited to identification documents, academic records, financial statements, tax information, and any other documentation required for comprehensive financial aid evaluation. Usage Data including IP address, browser type, browser version, pages visited, time and date of visit, time spent on pages, and other diagnostic data.</p>

              <h4 className="font-semibold mt-4">Data Storage and Security</h4>
              <p>Your information, including Personal Data, is stored on secure servers with 256-bit SSL encryption and is processed in accordance with the Family Educational Rights and Privacy Act (FERPA), Gramm-Leach-Bliley Act (GLBA), and other applicable federal and state regulations.</p>

              <h4 className="font-semibold mt-4">Data Sharing and Disclosure</h4>
              <p>We may disclose your Personal Data in the good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.</p>

              <h4 className="font-semibold mt-4">Data Protection Rights</h4>
              <p>You have the right to access, update, correct, or delete your personal information. You may also have the right to object to processing, request data portability, and withdraw consent at any time where Student Financial Navigator relied on your consent to process your personal information.</p>

              <h4 className="font-semibold mt-4">Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@studentgrantadvisor.org</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Terms of Service</h3>
                <button onClick={() => setActiveModal(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4 text-sm">
              <p>Please read these Terms of Service carefully before using the Student Financial Navigator platform operated by Student Financial Navigator. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>

              <h4 className="font-semibold mt-4">Acceptance of Terms</h4>
              <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. These Terms constitute a legally binding agreement between you and Student Financial Navigator regarding your use of the Service.</p>

              <h4 className="font-semibold mt-4">Educational Advisory Services</h4>
              <p>Student Financial Navigator provides independent educational advisory services including financial aid assessment, scholarship matching, grant identification, and educational funding guidance. Our services are intended for informational purposes only and do not constitute financial, legal, or academic advice.</p>

              <h4 className="font-semibold mt-4">No Guarantee of Results</h4>
              <p>While we strive to provide accurate and comprehensive financial aid information, we do not guarantee eligibility for any specific grant, scholarship, or financial aid program. Award amounts, eligibility criteria, and application requirements are determined solely by the respective funding organizations and educational institutions.</p>

              <h4 className="font-semibold mt-4">User Responsibilities</h4>
              <p>You are responsible for providing accurate, current, and complete information in connection with your use of the Service. You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p>

              <h4 className="font-semibold mt-4">Limitation of Liability</h4>
              <p>In no event shall Student Financial Navigator, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

              <h4 className="font-semibold mt-4">Governing Law</h4>
              <p>These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved in the state or federal courts located in Delaware.</p>

              <h4 className="font-semibold mt-4">Contact Information</h4>
              <p>For any questions about these Terms of Service, please contact legal@educationalnavigators.com</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <button onClick={() => setActiveModal(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">General Support</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>support@studentgrantadvisor.org</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+1 (888) 734-EDU1</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specialized Departments</h4>
                  <div className="space-y-2 text-sm">
                    <div>Privacy: privacy@studentgrantadvisor.org</div>
                    <div>Legal: legal@educationalnavigators.com</div>
                    <div>Advisors: advisors@educationalnavigators.com</div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <p className="text-sm">Monday-Friday 8:00 AM - 8:00 PM EST</p>
                <p className="text-sm mt-2">123 Education Boulevard, Suite 500, Washington, D.C. 20001</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
