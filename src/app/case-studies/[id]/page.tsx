import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, XCircle, Clock, User, ArrowDown, Target, Star, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find(p => p.id === params.id);
  if (!project) return { title: 'Case Study Not Found' };
  return { title: `${project.title} | Case Study` };
}

// Flow diagram components
const Node = ({ title, highlight = false, small = false }: { title: string; highlight?: boolean; small?: boolean }) => (
  <div className={`rounded-xl border flex items-center justify-center text-center shadow-lg font-medium tracking-wide ${
    small ? 'px-4 py-2 text-sm' : 'px-6 py-4'
  } ${
    highlight 
      ? 'bg-primary/20 border-primary/50 text-white' 
      : 'bg-white/5 border-white/10 text-white/80'
  }`}>
    {title}
  </div>
);

const Edge = () => (
  <div className="flex flex-col items-center justify-center py-2 opacity-50">
    <div className="w-0.5 h-6 bg-white/30 rounded-full" />
    <ArrowDown className="w-4 h-4 text-white/50 -mt-1" />
  </div>
);

export default async function CaseStudyPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>
          
          {project.companyLogo && (
            <div className="mb-8 inline-block bg-white px-6 py-3 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform">
              <img 
                src={project.companyLogo} 
                alt="Company Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          )}

          {/* 2-Column Overview & Image Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
            {/* Left: Overview */}
            {project.overview && (
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
                <div className="border-l-2 border-primary/30 pl-6">
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {project.overview}
                  </p>
                </div>
              </div>
            )}
            
            {/* Right: Dashboard Image */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-contain bg-card/40" 
              />
            </div>
          </div>

          {/* Role, Timeline, Tech Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-3xl bg-card/40 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Role
              </p>
              <p className="text-white font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" /> Timeline
              </p>
              <p className="text-white font-medium">{project.timeline}</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white/80 whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="space-y-24">

          {/* Goal Section */}
          {(project.goal || project.goalList) && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                The Goal
              </h2>
              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
                {project.goal && (
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {project.goal}
                  </p>
                )}
                {project.goalList && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.goalList.map((g, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{g}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Enterprise Architecture Diagram */}
          {project.id === 'pharmacovigilance-safety' && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">01</span>
                Enterprise Architecture
              </h2>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-background border border-white/10 flex flex-col items-center gap-4">
                <div className="px-6 py-2 rounded-xl bg-primary/20 border border-primary/30 text-white font-semibold shadow-sm">
                  Patients / Hospitals / HCPs
                </div>
                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-secondary/20 border border-secondary/30 text-white font-medium shadow-sm">
                  Intake Portal
                </div>
                <div className="w-0.5 h-5 bg-white/20" />
                
                <div className="w-full max-w-3xl p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center shadow-lg relative mt-2">
                  <div className="absolute -top-3 bg-background px-3 text-xs font-semibold text-muted-foreground tracking-widest uppercase">Salesforce Safety Platform</div>
                  
                  <div className="grid grid-cols-3 gap-4 w-full mt-3">
                    <div className="p-3 rounded-lg bg-card/50 border border-white/10 text-center text-white/90 text-sm font-medium">Case Mgmt</div>
                    <div className="p-3 rounded-lg bg-card/50 border border-white/10 text-center text-white/90 text-sm font-medium">Workflow Engine</div>
                    <div className="p-3 rounded-lg bg-card/50 border border-white/10 text-center text-white/90 text-sm font-medium">Medical Review</div>
                  </div>
                </div>

                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium shadow-sm">
                  Regulatory Compliance
                </div>
                
                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-[#0078D4]/20 border border-[#0078D4]/40 text-[#0078D4] font-semibold shadow-sm text-center">
                  Health Authorities<br/><span className="text-xs font-normal">(FDA / EMA / MHRA etc.)</span>
                </div>

                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium">
                  Signal Detection Engine
                </div>

                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm font-medium">
                  Risk Assessment Module
                </div>

                <div className="w-0.5 h-5 bg-white/20" />
                <div className="px-6 py-2 rounded-xl bg-background border border-white/20 text-muted-foreground text-sm font-medium border-dashed">
                  Case Closure & Archive
                </div>
              </div>
            </section>
          )}

          {/* Architecture Section */}
          {(project.architectureHighlights || project.id === 'digital-loan-origination') && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">System Architecture</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Flow Diagram (Tailwind Rendered) */}
                <div className="p-8 rounded-3xl bg-card border border-white/10 flex flex-col items-center">
                  
                  {project.id === 'enterprise-crm-transformation' && (
                    <>
                      <Node title="Business Users" />
                      <Edge />
                      <Node title="Salesforce CRM" highlight />
                      <div className="flex w-full justify-center gap-8 px-4 my-2 opacity-50">
                        <div className="w-0.5 h-6 bg-white/30 rounded-full" /><div className="w-0.5 h-6 bg-white/30 rounded-full" />
                      </div>
                      <div className="flex gap-4">
                        <Node title="LWC" />
                        <Node title="Apex Services" />
                      </div>
                      <div className="flex w-full justify-center gap-8 px-4 my-2 opacity-50">
                        <div className="w-0.5 h-6 bg-white/30 rounded-full" /><div className="w-0.5 h-6 bg-white/30 rounded-full" />
                      </div>
                      <Node title="Salesforce Flows" />
                      <Edge />
                      <Node title="Kafka Event Layer" highlight />
                      <div className="flex w-full justify-center gap-8 px-4 my-2 opacity-50">
                        <div className="w-0.5 h-6 bg-white/30 rounded-full" /><div className="w-0.5 h-6 bg-white/30 rounded-full" />
                      </div>
                      <div className="flex gap-4">
                        <Node title="IBM Apps" />
                        <Node title="External Systems" />
                      </div>
                    </>
                  )}

                  {project.id === 'digital-loan-origination' && (
                    <>
                      <Node title="Customer" />
                      <Edge />
                      <Node title="Sales Representative" />
                      <Edge />
                      <Node title="Salesforce Loan Platform" highlight />
                      <div className="flex w-full justify-center gap-8 px-4 my-2 opacity-50">
                        <div className="w-0.5 h-6 bg-white/30 rounded-full" /><div className="w-0.5 h-6 bg-white/30 rounded-full" /><div className="w-0.5 h-6 bg-white/30 rounded-full" />
                      </div>
                      <div className="flex gap-2 w-full justify-center">
                        <Node title="PAN API" small />
                        <Node title="Aadhaar" small />
                        <Node title="CIBIL" small />
                      </div>
                      <div className="flex w-full justify-center gap-8 px-4 my-2 opacity-50">
                        <div className="w-0.5 h-6 bg-white/30 rounded-full" />
                      </div>
                      <Node title="Loan Processing Engine" highlight />
                      <Edge />
                      <Node title="Approval Workflow" />
                      <Edge />
                      <Node title="Banking Systems" />
                    </>
                  )}
                  
                </div>

                {/* Architecture Highlights */}
                {project.architectureHighlights && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Architecture Highlights</h3>
                    <ul className="space-y-4">
                      {project.architectureHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {!project.architectureHighlights && project.id === 'digital-loan-origination' && (
                   <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Secure Integrations</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      The unified platform architecture relies on rigorous integration across PAN, Aadhaar, and CIBIL data providers to securely fetch customer credit and identity records before allowing applications into the processing engine.
                    </p>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                      <ShieldCheck className="w-5 h-5" /> Highly Compliant Verification
                    </div>
                  </div>
                )}
              </div>

              {/* Uploaded Architecture Image - Full Width & Transparent */}
              {project.architectureImage && (
                <div className={`w-full flex justify-center items-center mt-12 transition-opacity ${
                  ['enterprise-crm-transformation', 'digital-loan-origination', 'pharmacovigilance-safety'].includes(project.id)
                    ? 'mix-blend-screen opacity-90 hover:opacity-100' 
                    : ''
                }`}>
                  <img 
                    src={project.architectureImage} 
                    alt="Architecture Diagram" 
                    className={`w-full max-w-3xl h-auto object-contain rounded-3xl ${
                      ['enterprise-crm-transformation', 'digital-loan-origination', 'pharmacovigilance-safety'].includes(project.id)
                        ? 'dark:invert hue-rotate-180' 
                        : 'shadow-2xl border border-white/10'
                    }`}
                  />
                </div>
              )}
            </section>
          )}
          
          {/* Detailed Challenges Array */}
          {project.challengesList && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">The Challenge</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.challengesList.map((ch, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-card/50 border border-white/10 flex flex-col h-full hover:border-primary/30 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-4">{ch.title}</h3>
                    <div className="mb-6">
                      <span className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2 block">Problem</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{ch.problem}</p>
                    </div>
                    {ch.solution && (
                      <div className="mt-auto">
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 block">Solution</span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{ch.solution}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Solution Details Array */}
          {project.solutionDetails && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">The Solution</h2>
              <div className="grid gap-6">
                {project.solutionDetails.map((sol, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm shrink-0">0{idx + 1}</span>
                      {sol.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 ml-11">{sol.description}</p>
                    {sol.points && sol.points.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-3 ml-11">
                        {sol.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Standard Challenge/Solution Fallback */}
          {!project.challengesList && project.challenge && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">01</span>
                The Challenge
              </h2>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </section>
          )}

          {!project.solutionDetails && !project.challengesList && project.solution && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm">02</span>
                The Solution
              </h2>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </section>
          )}

          {/* My Contributions */}
          {project.contributions && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                My Contributions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.contributions.map((contribution, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-white/10 hover:border-yellow-400/30 transition-colors">
                    <h3 className="text-lg font-bold text-white mb-4">{contribution.category}</h3>
                    <ul className="space-y-3">
                      {contribution.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Detailed Impact */}
          {project.impactDetails && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">The Impact</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.impactDetails.map((impact, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                    <h3 className="text-lg font-bold text-white mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{impact.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Before vs After Grid */}
          {project.beforeVsAfter && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Transformation Impact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
                  <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                    <XCircle className="w-5 h-5" /> Before
                  </h3>
                  <ul className="space-y-4">
                    {project.beforeVsAfter.before.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <XCircle className="w-4 h-4 text-red-500/50 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                  <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> After
                  </h3>
                  <ul className="space-y-4">
                    {project.beforeVsAfter.after.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Key Learnings */}
          {project.keyLearnings && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-8">Key Learnings</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.keyLearnings.map((learning, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-2">{learning.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{learning.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Standard/Key Results */}
          {project.keyResults && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Key Results</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.keyResults.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <p className="text-white/90 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.results && !project.beforeVsAfter && !project.keyResults && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">03</span>
                The Impact
              </h2>
              <div className="grid gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-card/40 border border-white/10 hover:border-accent/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-white/90 text-lg">{result}</p>
                  </div>
                ))}
              </div>
            </section>
          )}


        </div>
        
        {/* Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Want to build something similar?</h3>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            Let's Talk
          </Link>
        </div>

      </div>
    </main>
  );
}
