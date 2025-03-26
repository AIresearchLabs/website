"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, BarChart3, Award, ArrowRight } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Home() {
  const { scrollToSection } = useSmoothScroll()

  const agents = [
    {
      name: "Overlord",
      score: 9.2,
      category: "Trading Bot @OverlordBot_",
      description1: "Strong security protocols ensuring asset protection.",
      description2: "Advanced trading algorithms for optimal performance.",
    },
    {
      name: "Arbitrum Brain",
      score: 5,
      category: "Shitposting agent @ArbitrumBrainAI",
      description1: "Basic security measures with limited functionality.",
      description2: "Focus on community engagement and humor.",
    },
    {
      name: "Vitalik AI",
      score: 7.2,
      category: "Meme agent @vitaieth",
      description1: "Moderate security with innovative features.",
      description2: "Utilizes meme culture for engagement.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-blue-800 from-blue-750 to-blue-900">
        <div className="container mx-auto px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Future of Crypto AI Agents Evaluation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We score AI-powered crypto agents, evaluating their performance, security, and utility in the blockchain
              space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
        
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300"
                onClick={() => scrollToSection("featured-ratings")}
              >
                Explore Ratings
              </Button>
              <Button
                size="lg"
                className="text-white border-white hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                onClick={() => scrollToSection("cta-section")}
              >
                Submit an Agent
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-[300px] h-[300px]">
              <Image
                src="/images/logo-mirrored.png"
                alt="AI Agent Research Labs Logo"
                fill
                className="z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AI Agent Research Labs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-0">
            We are a decentralized, independent entity committed to transparently reviewing and scoring AI-powered crypto agents built on top of<span className="text-blue-700">Arbitrum L2</span>, ensuring trust, security, and efficiency in blockchain automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <CardTitle>Security Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We thoroughly evaluate the security protocols and vulnerabilities of each AI agent to ensure your assets
                remain protected
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our rigorous testing provides quantitative data on speed, accuracy and efficiency across various market
                conditions
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Zap className="h-8 w-8 text-blue-600" />
              <CardTitle>Utility Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We evaluate real-world applications and practical benefits of each agent in the evolving blockchain
                ecosystem
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Evaluation Process */}
      <section id="methodology" className="py-16 mb-10 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Evaluation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive, transparent methodology to ensure fair and accurate assessments of all AI
              crypto agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Analysis</h3>
                <p className="text-gray-600">
                  We examine the underlying algorithms, code quality, and technical architecture to assess reliability
                  and scalability
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Auditing</h3>
                <p className="text-gray-600">
                  Our security experts conduct penetration testing and vulnerability assessments to identify potential
                  risks
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Testing</h3>
                <p className="text-gray-600">
                  We run simulations across various market conditions to measure response time, accuracy, and
                  decision-making capabilities.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User Experience Review</h3>
                <p className="text-gray-600">
                  We evaluate the interface, ease of use, and overall user experience from both novice and expert
                  perspectives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ratings */}
      <section id="featured-ratings" className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Agents Ratings</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest evaluations of top-performing AI crypto agents built on top of <span className="text-blue-700">Arbitrum L2</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="overflow-hidden">
              <div
                className={`h-2 ${agent.score > 9 ? "bg-green-500" : agent.score > 8 ? "bg-blue-500" : agent.score < 6 ? "bg-red-500" : "bg-yellow-500"}`}
              ></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{agent.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Award className={`h-5 w-5 ${agent.score > 9 ? "text-green-500" : agent.score > 8 ? "text-blue-500" : agent.score < 6 ? "text-red-500" : "text-yellow-500"}`} />
                    <span className="font-bold text-lg">{agent.score}</span>
                  </div>
                </div>
                <CardDescription>{agent.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{agent.description1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{agent.description2}</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 flex items-center justify-between">
                  View Full Evaluation <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800"
            onClick={() => scrollToSection("featured-ratings")}
          >
            View More Ratings 
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect AI Crypto Agent?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the most secure, efficient, and powerful AI agents for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-300"
              onClick={() => scrollToSection("featured-ratings")}
            >
              Explore Top-Rated Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-150 text-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative w-[60px] h-[60px] mr-3">
                <Image
                  src="/images/logo mirrored black.png"
                  alt="AI Agent Research Labs Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">AI Agent Research Labs</span>
            </div>
            <div className="flex gap-6">
              <a
                href="#about"
                className="hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                About
              </a>
              <a
                href="#methodology"
                className="hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("methodology")
                }}
              >
                Methodology
              </a>
              <a
                href="#featured-ratings"
                className="hover:text-blue-400"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("featured-ratings")
                }}
              >
                Ratings
              </a>
              <a
              href="https://x.com/ai_agent_r_labs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              >
                <img src="/images/x-logo.svg" alt="X Logo" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center">© {new Date().getFullYear()} AI Agent Research Labs. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

