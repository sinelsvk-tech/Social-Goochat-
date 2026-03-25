/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 selection:bg-blue-500/10 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Ambient Glow - Softened for light mode */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-blue-100 rounded-full blur-[120px] pointer-events-none will-change-transform"
            />

            <div className="relative flex flex-col items-center gap-12">
              {/* Animated Logo Container */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Outer Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-blue-500/5 rounded-full will-change-transform"
                />
                
                {/* Middle Pulsing Ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.03, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 border border-blue-400/10 rounded-full will-change-transform"
                />

                {/* Inner Static Ring */}
                <div className="absolute inset-8 border border-blue-200/20 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.03)]" />

                {/* Animated SVG Checkmark */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20 text-blue-600 relative z-10 drop-shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M25 50 L45 70 L75 35"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.6,
                    }}
                    className="will-change-[stroke-dashoffset]"
                  />
                </svg>

                {/* Floating Particles/Orbs */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15 + i * 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full will-change-transform"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `${60 + i * 15}px 0px`,
                    }}
                  />
                ))}
              </div>

              {/* Text Reveal */}
              <div className="text-center space-y-5">
                <h1 className="flex justify-center items-center overflow-hidden h-10 perspective-[1000px]">
                  {"Goochat".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0, rotateX: -45 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.4 + i * 0.06,
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="text-slate-900 text-2xl font-extralight tracking-[0.4em] uppercase inline-block origin-bottom will-change-transform [backface-visibility:hidden]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ delay: 2.4, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mx-auto will-change-[width]" 
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.2, duration: 1.5, ease: "easeOut" }}
                  className="relative"
                >
                  <p className="text-slate-400 text-[11px] uppercase tracking-[0.5em] font-light will-change-opacity">
                    Твой лучший выбор
                  </p>
                  
                  {/* Refined Glint Animation */}
                  <motion.div
                    animate={{
                      x: ["-150%", "250%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent w-full h-full -skew-x-25 pointer-events-none will-change-transform"
                  />
                </motion.div>
              </div>

              {/* Login Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 relative group"
              >
                {/* Pulsing Button Glow */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-blue-200/40 rounded-full blur-xl pointer-events-none"
                />

                <motion.button
                  onClick={() => setIsLoggedIn(true)}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.08)",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-12 py-3.5 rounded-full border border-blue-500/20 bg-white text-blue-600 text-[11px] uppercase tracking-[0.5em] font-semibold backdrop-blur-xl transition-all duration-500 hover:border-blue-400 hover:text-blue-700 shadow-sm"
                >
                  <span className="relative z-10">Войти</span>
                  
                  {/* Button Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: ["-150%", "250%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full h-full -skew-x-25 pointer-events-none"
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Ambient Glow - Same as landing */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-blue-100 rounded-full blur-[120px] pointer-events-none will-change-transform"
            />

            <div className="relative flex flex-col items-center gap-12 pb-32">
              {/* Dashboard Icon Container - Styled like Logo */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-blue-500/5 rounded-full will-change-transform"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.03, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 border border-blue-400/10 rounded-full will-change-transform"
                />
                <div className="absolute inset-8 border border-blue-200/20 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.03)]" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.15)] relative z-10"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.div>
              </div>

              {/* Text Content - Styled like landing */}
              <div className="text-center space-y-5">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-slate-900 text-2xl font-extralight tracking-[0.2em] uppercase"
                >
                  Добро пожаловать в <span className="font-medium text-blue-600">Goochat</span>
                </motion.h2>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mx-auto" 
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  className="text-slate-400 text-[11px] uppercase tracking-[0.3em] font-light max-w-xs mx-auto leading-loose"
                >
                  Ваше пространство для безопасного и быстрого общения.
                </motion.p>
              </div>

              {/* Action Buttons - Primary Action */}
              <div className="flex flex-col items-center gap-6">
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                  onClick={() => setIsLoggedIn(false)}
                  className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-light hover:text-blue-500 transition-colors"
                >
                  Выйти из системы
                </motion.button>
              </div>

              {/* Bottom Navigation Bar */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ 
                  y: [0, -4, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: {
                    delay: 1.4,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md h-20 bg-white/70 backdrop-blur-2xl rounded-[32px] border border-blue-500/10 shadow-[0_20px_50px_rgba(59,130,246,0.1)] flex items-center justify-around px-4 z-50"
              >
                {[
                  { label: "Лента", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" },
                  { label: "Друзья", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" },
                  { label: "Сообщения", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", primary: true },
                  { label: "Группы", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                  { label: "Профиль", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }
                ].map((item, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex flex-col items-center gap-1.5 group ${item.primary ? 'relative' : ''}`}
                  >
                    {item.primary && (
                      <motion.div
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-blue-400 rounded-full blur-2xl pointer-events-none"
                      />
                    )}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${item.primary ? 'bg-blue-600 shadow-[0_8px_25px_rgba(59,130,246,0.3)]' : 'group-hover:bg-blue-50 group-hover:shadow-inner'}`}
                    >
                      <svg className={`w-5 h-5 ${item.primary ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                      </svg>
                    </motion.div>
                    <motion.span 
                      className={`text-[8px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${item.primary ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}
                    >
                      {item.label}
                    </motion.span>
                  </motion.button>
                ))}
              </motion.div>
              {/* Feature Grid - Minimalist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 1 }}
                className="grid grid-cols-3 gap-12 w-full max-w-lg mt-4"
              >
                {[
                  { label: "Security", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                  { label: "Speed", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { label: "Privacy", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-blue-500/10 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                      <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-slate-400 group-hover:text-slate-600 transition-colors">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
