import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { 
  Activity, 
  Calendar, 
  ClipboardList, 
  Heart, 
  LineChart, 
  Shield,
  Users,
  CheckCircle2
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-clinical-light to-background py-20 lg:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Activity className="h-4 w-4" />
              Research Study Now Enrolling
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Health & Fitness Research Study
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Join our comprehensive research program designed to understand the relationship 
              between exercise, health metrics, and overall well-being. Contribute to 
              groundbreaking health science while improving your own fitness.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <Users className="h-5 w-5" />
                  Register as Participant
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* What to Expect Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">What to Expect</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our structured program combines guided workout sessions with comprehensive 
              health tracking to gather valuable research data.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="clinical-shadow transition-all hover:clinical-shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Scheduled Workouts</h3>
                <p className="text-muted-foreground">
                  Book into supervised workout sessions including cardio, strength training, 
                  and yoga classes tailored to various fitness levels.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-shadow transition-all hover:clinical-shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <ClipboardList className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Health Metrics Tracking</h3>
                <p className="text-muted-foreground">
                  Record key health indicators including grip strength, bone density, 
                  heart rate, body composition, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="clinical-shadow transition-all hover:clinical-shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <LineChart className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Progress Visualization</h3>
                <p className="text-muted-foreground">
                  View your health data trends over time with advanced analytics 
                  dashboards showing your improvement journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Metrics Section */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Comprehensive Health Assessment
              </h2>
              <p className="mb-8 text-muted-foreground">
                Throughout the study, we'll track multiple health metrics to understand 
                how regular exercise impacts your overall physical condition.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: Heart, label: "Heart Rate Monitoring" },
                  { icon: Activity, label: "Grip Strength Testing" },
                  { icon: Shield, label: "Bone Density Scans" },
                  { icon: CheckCircle2, label: "Body Composition Analysis" },
                  { icon: ClipboardList, label: "Pushup Count Assessment" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="clinical-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Workout Sessions</div>
                </CardContent>
              </Card>
              <Card className="clinical-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Health Metrics</div>
                </CardContent>
              </Card>
              <Card className="clinical-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Week Program</div>
                </CardContent>
              </Card>
              <Card className="clinical-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Secure Data</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <Card className="overflow-hidden bg-primary">
            <CardContent className="p-8 text-center lg:p-12">
              <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">
                Ready to Participate?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
                Join our research study today and contribute to advancing health science 
                while improving your own fitness journey.
              </p>
              <Link to="/register">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Users className="h-5 w-5" />
                  Register Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">HealthStudy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Health & Fitness Research Study. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}