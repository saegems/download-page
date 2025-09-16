"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Github, MessageCircle, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function SagemsDownloadPage() {
  const handleDownload = () => {
    const downloadUrl = "https://filebin.net/folloqx9yuyy95h4/saegems.zip"
    window.open(downloadUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/images/saegems-logo.jpg"
              alt="saegems logo"
              width={200}
              height={80}
              className="mx-auto rounded-lg shadow-lg border-2 border-accent/30"
            />
          </div>
          <h1
            className="jersey-font text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text"
            style={{
              color: "#6E6CED",
              textShadow: "0 0 20px rgba(249, 134, 211, 0.5)",
            }}
          >
            saegems
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto rounded-full mb-8" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-sm border-2 border-accent/30 p-8 mb-12 shadow-2xl">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-lg">
                  <Download className="w-12 h-12 text-white" />
                </div>
                <h2 className="jersey-font text-4xl font-bold text-card-foreground mb-4">Download saegems</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  saegems is an end-to-end secure and encrypted chatting application designed in retro style. Connect
                  with friends and colleagues through nostalgic interfaces while enjoying modern security. Experience
                  private conversations with vintage aesthetics, featuring customizable retro themes and seamless
                  one-to-one messaging that brings back the golden age of digital communication.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="jersey-font text-2xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-400/50"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Now
              </Button>
            </div>
          </Card>

          <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/30 p-8 mb-12 shadow-2xl">
            <h2 className="jersey-font text-3xl font-bold text-center text-card-foreground mb-8">
              Installation Instructions
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg border border-primary/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="jersey-font text-xl font-semibold text-card-foreground mb-2">Extract the Archive</h3>
                    <p className="text-muted-foreground">Unzip saegems.zip to a directory of your choice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg border border-secondary/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="jersey-font text-xl font-semibold text-card-foreground mb-2">Run the Application</h3>
                    <p className="text-muted-foreground">Execute main.exe to start saegems</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/30 p-6 text-center hover:border-accent/50 transition-colors">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="jersey-font text-xl font-bold text-card-foreground mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground">Your conversations are protected with encryption</p>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 border-secondary/30 p-6 text-center hover:border-accent/50 transition-colors">
              <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="jersey-font text-xl font-bold text-card-foreground mb-2">Retro Interface</h3>
              <p className="text-muted-foreground">Nostalgic design meets modern functionality</p>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/30 p-6 text-center hover:border-accent/50 transition-colors">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="jersey-font text-xl font-bold text-card-foreground mb-2">One-to-One Chat</h3>
              <p className="text-muted-foreground">Direct messaging with friends and colleagues</p>
            </Card>
          </div>

          <Card className="bg-card/90 backdrop-blur-sm border-2 border-primary/30 p-8 shadow-2xl">
            <h2 className="jersey-font text-3xl font-bold text-center text-card-foreground mb-8">
              Open Source Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                asChild
                className="jersey-font text-lg p-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group bg-transparent"
              >
                <a href="https://github.com/saegems/chat-client" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Chat Client
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="jersey-font text-lg p-6 border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group bg-transparent"
              >
                <a href="https://github.com/saegems/chat-server" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Chat Server
                </a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="jersey-font text-lg p-6 border-2 border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group bg-transparent"
              >
                <a href="https://github.com/saegems/chat-service" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Chat Service
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <footer className="text-center mt-16">
          <p className="jersey-font text-lg text-foreground">{"Built with ❤️ for the retro computing community"}</p>
        </footer>
      </div>
    </div>
  )
}
