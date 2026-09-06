import { Button } from '../ui/Button';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gym-accent font-semibold text-sm uppercase tracking-wider">
              Start Your Fitness Journey
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-tight">
              Become Your <span className="text-gym-accent">Best</span> Self
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Push your limits, build strength, and transform your life with our world-class facilities and expert trainers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Join Now</Button>
              <Button variant="secondary">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gym-surface border border-gym-border">
              <img
                src="/src/assets/hero.png"
                alt="Athlete training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gym-surface border border-gym-border rounded-xl p-4">
              <p className="text-gym-accent font-bold text-2xl">500+</p>
              <p className="text-zinc-400 text-sm">Active Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
