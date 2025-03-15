'use client';

import type { CryptoData } from '@/app/lib/utils/types';
import { Tabs, TabsContent, TabsList } from '@/app/components/ShadcnUi/tabs';
import { motion } from 'motion/react';
import { Code, Users, Cpu } from 'lucide-react';
import { GlassCard } from '@/app/components/ShadcnUi/glass-card';
import { CardContent } from '@/app/components/ShadcnUi/card';
import { AnimatedTabsTrigger } from '@/app/components/ShadcnUi/animated-tabs-trigger';

interface AboutSectionProps {
  data: CryptoData | null;
  colors?: {
    secondary: string;
    primaryWithOpacity: (opacity: number) => string;
    background: string;
    secondaryWithOpacity: (opacity: number) => string;
    primary: string;
  };
}

export default function AboutSection({ data, colors }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard>
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">
            About Polkadot
          </h2>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="border border-[#28c9e1]/20 bg-[#0d1217]/60">
              <AnimatedTabsTrigger value="overview">
                <Code className="mr-1 h-4 w-4" /> Overview
              </AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="technology">
                <Cpu className="mr-1 h-4 w-4" /> Technology
              </AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="team">
                <Users className="mr-1 h-4 w-4" /> Team
              </AnimatedTabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="prose max-w-none text-white/80 dark:prose-invert">
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-75 blur-md"></div>
                    <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-black/50 p-4">
                      <img
                        src={
                          data?.image || '/placeholder.svg?height=120&width=120'
                        }
                        alt="Polkadot Logo"
                        className="h-24 w-24"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-lg">
                  Polkadot is a next-generation blockchain protocol that
                  connects multiple specialized blockchains into a unified
                  network. It was founded by Dr. Gavin Wood, who was also a
                  co-founder of Ethereum and the creator of Solidity, the
                  programming language for Ethereum smart contracts.
                </p>

                <div className="my-6 rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                  <h3 className="mb-2 text-lg font-medium text-[#28c9e1]">
                    DOT Token Utility
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-gradient-to-r from-[#28c9e1] to-[#1a95a7]"></span>
                      <span>
                        <strong className="text-[#F5F4F6]">Governance:</strong>{' '}
                        Token holders have control over the protocol, including
                        determining network fees, auction dynamics, and
                        scheduling upgrades.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-gradient-to-r from-[#1a95a7] to-[#28c9e1]"></span>
                      <span>
                        <strong className="text-[#F5F4F6]">Staking:</strong> DOT
                        can be staked to participate in the network's security
                        and earn rewards.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 inline-block h-4 w-4 rounded-full bg-gradient-to-r from-[#28c9e1] to-[#0d1217]"></span>
                      <span>
                        <strong className="text-[#F5F4F6]">Bonding:</strong> New
                        parachains are added by bonding DOT tokens.
                      </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Polkadot's unique architecture allows for cross-blockchain
                  transfers of any type of data or asset, not just tokens,
                  making it one of the most interoperable blockchain platforms
                  in the ecosystem.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="technology" className="space-y-4">
              <div className="prose max-w-none text-white/80 dark:prose-invert">
                <div className="mb-6">
                  <div className="relative overflow-hidden rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#28c9e1]/20 blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#1a95a7]/20 blur-3xl"></div>
                    <h3 className="mb-4 text-xl font-semibold text-[#F5F4F6]">
                      Polkadot Architecture
                    </h3>
                    <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                        <h4 className="mb-2 text-lg font-medium text-[#28c9e1]">
                          Relay Chain
                        </h4>
                        <p className="text-sm">
                          The main Polkadot chain that provides shared security,
                          consensus, and interoperability between parachains.
                        </p>
                      </div>
                      <div className="rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                        <h4 className="mb-2 text-lg font-medium text-[#1a95a7]">
                          Parachains
                        </h4>
                        <p className="text-sm">
                          Independent blockchains that can have their own tokens
                          and optimize their design for specific use cases.
                        </p>
                      </div>
                      <div className="rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                        <h4 className="mb-2 text-lg font-medium text-[#28c9e1]">
                          Parathreads
                        </h4>
                        <p className="text-sm">
                          Similar to parachains but with a pay-as-you-go model
                          for blockchains that don't need continuous
                          connectivity.
                        </p>
                      </div>
                      <div className="rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4">
                        <h4 className="mb-2 text-lg font-medium text-[#1a95a7]">
                          Bridges
                        </h4>
                        <p className="text-sm">
                          Allow Polkadot to connect to external networks like
                          Ethereum and Bitcoin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>
                  Polkadot uses a Nominated Proof-of-Stake (NPoS) consensus
                  mechanism, which is designed to be more energy-efficient than
                  Proof-of-Work systems. The network is secured by validators
                  who stake DOT tokens and are nominated by other token holders.
                </p>

                <div className="my-6 overflow-hidden rounded-lg border border-[#28c9e1]/10 bg-gradient-to-br from-[#0d1217]/60 to-[#28c9e1]/20 p-4">
                  <h3 className="mb-2 text-lg font-medium text-[#F5F4F6]">
                    On-Chain Governance
                  </h3>
                  <p>
                    One of Polkadot's most innovative features is its on-chain
                    governance system, which allows the network to evolve and
                    upgrade without hard forks. This helps avoid the community
                    splits that have occurred in other blockchain networks.
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-[#28c9e1]"></div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#28c9e1] to-[#1a95a7]"></div>
                    <div className="h-4 w-4 rounded-full bg-[#1a95a7]"></div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#1a95a7] to-[#F5F4F6]"></div>
                    <div className="h-4 w-4 rounded-full bg-[#F5F4F6]"></div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-4">
              <div className="prose max-w-none text-white/80 dark:prose-invert">
                <p>
                  Polkadot was created by the Web3 Foundation, a Swiss
                  foundation founded to facilitate a fully functional and
                  user-friendly decentralized web. The technology is being built
                  by Parity Technologies, a core blockchain infrastructure
                  company.
                </p>

                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="overflow-hidden rounded-lg border border-[#28c9e1]/10 bg-[#0d1217]/30 p-4 transition-all hover:bg-[#0d1217]/50">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#28c9e1] to-[#1a95a7] p-1">
                      <div className="h-full w-full rounded-full bg-[#0d1217] p-2 text-center text-xl font-bold text-[#F5F4F6]">
                        GW
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-[#F5F4F6]">
                      Dr. Gavin Wood
                    </h4>
                    <p className="text-sm text-[#F5F4F6]/70">
                      Founder of Polkadot and President of Web3 Foundation.
                      Former CTO and co-founder of Ethereum.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 p-1">
                      <div className="h-full w-full rounded-full bg-black p-2 text-center text-xl font-bold text-white">
                        RH
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-white">
                      Robert Habermeier
                    </h4>
                    <p className="text-sm text-white/70">
                      Co-founder of Polkadot and Thiel Fellow, with a research
                      background in blockchains and distributed systems.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 p-1">
                      <div className="h-full w-full rounded-full bg-black p-2 text-center text-xl font-bold text-white">
                        PC
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-white">
                      Peter Czaban
                    </h4>
                    <p className="text-sm text-white/70">
                      Co-founder and former Technology Director of the Web3
                      Foundation, overseeing technical developments.
                    </p>
                  </div>
                </div>

                <p>
                  The development of Polkadot is supported by a global team of
                  researchers, developers, and community contributors who are
                  committed to building a more decentralized and interoperable
                  blockchain ecosystem.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </GlassCard>
    </motion.div>
  );
}
