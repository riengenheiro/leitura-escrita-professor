import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Printer, 
  FileText, 
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  LogOut
} from 'lucide-react'
import { manualData, bonusModules } from '../data/manualData'
import { QuizFomeCerebral } from './manual/QuizFomeCerebral'
import { DiarioAlimentar } from './manual/DiarioAlimentar'
import { ChecklistFatoresRisco } from './manual/ChecklistFatoresRisco'
import { TemplateCarta } from './manual/TemplateCarta'
import { ModuloContent } from './manual/ModuloContent'
import { TrackerSintomas } from './manual/TrackerSintomas'
import { Missao7Dias } from './manual/Missao7Dias'
import { ProtocoloPessoal } from './manual/ProtocoloPessoal'

type ViewMode = 'interactive' | 'text' | 'print'

interface ManualInterativoProps {
  userEmail: string
  onLogout?: () => void
}

export function ManualInterativo({ userEmail, onLogout }: ManualInterativoProps) {
  const [currentModule, setCurrentModule] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [specialView, setSpecialView] = useState<'missao' | 'protocolo' | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('interactive')
  const [isDesktop, setIsDesktop] = useState(false)
  const mainContentRef = useRef<HTMLElement>(null)

  // Scroll to top function
  const scrollToTop = () => {
    // Scroll window
    window.scrollTo(0, 0)
    // Scroll main content element if it exists
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // Also try document.documentElement
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll to top when module or section changes
  useEffect(() => {
    if (currentModule || currentSection) {
      // Immediate scroll
      scrollToTop()
      // Scroll again after render
      requestAnimationFrame(() => {
        scrollToTop()
      })
      // Final scroll after a small delay to ensure DOM is updated
      setTimeout(() => {
        scrollToTop()
      }, 150)
    }
  }, [currentModule, currentSection])

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  // Combine modules and bonus modules for search
  const allModules = [...manualData.modules, ...bonusModules]
  const selectedModule = allModules.find(m => m.id === currentModule)
  const selectedSection = selectedModule?.sections.find(s => s.id === currentSection)

  // Navigation helper for mission/protocol components
  const handleSpecialNavigate = (moduleId: string, sectionId: string) => {
    setSpecialView(null)
    // Find which module contains this section
    if (moduleId) {
      setCurrentModule(moduleId)
      setCurrentSection(sectionId)
    } else {
      // Search through all modules for the section
      for (const mod of allModules) {
        const found = mod.sections.find(s => s.id === sectionId)
        if (found) {
          setCurrentModule(mod.id)
          setCurrentSection(sectionId)
          break
        }
      }
    }
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white print:bg-white print:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-800/95 backdrop-blur-xl border-b border-gray-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-dark-700 transition-colors lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold gradient-text">{manualData.title}</h1>
                <p className="text-xs text-gray-400">{userEmail}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === 'interactive' ? 'text' : 'interactive')}
              className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
              title={viewMode === 'interactive' ? 'Modo Texto' : 'Modo Interativo'}
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
              title="Imprimir"
            >
              <Printer className="w-5 h-5" />
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-2 rounded-lg hover:bg-dark-700 transition-colors text-red-400 hover:text-red-300"
                title="Sair"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <AnimatePresence>
          {(sidebarOpen || isDesktop) && (
            <>
              {/* Overlay for mobile */}
              {sidebarOpen && !isDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSidebarOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
              )}
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className={`fixed lg:static w-80 bg-dark-800 border-r border-gray-800 h-[calc(100vh-73px)] overflow-y-auto print:hidden z-50 lg:z-auto ${
                  sidebarOpen || isDesktop ? 'block' : 'hidden'
                }`}
              >
              <div className="p-6">
                {/* Special Navigation Buttons */}
                <div className="mb-6 space-y-2">
                  <button
                    onClick={() => {
                      setSpecialView('missao')
                      setCurrentModule(null)
                      setCurrentSection(null)
                      setSidebarOpen(false)
                      scrollToTop()
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      specialView === 'missao'
                        ? 'bg-energy-500/20 border border-energy-500/30'
                        : 'bg-gradient-to-r from-energy-500/10 to-vitality-500/10 border border-energy-500/20 hover:border-energy-500/40'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-energy-500/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-energy-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-energy-300">Missão 7 Dias</h3>
                      <p className="text-xs text-gray-500">Sua jornada guiada</p>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setSpecialView('protocolo')
                      setCurrentModule(null)
                      setCurrentSection(null)
                      setSidebarOpen(false)
                      scrollToTop()
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      specialView === 'protocolo'
                        ? 'bg-vitality-500/20 border border-vitality-500/30'
                        : 'bg-gradient-to-r from-vitality-500/10 to-purple-500/10 border border-vitality-500/20 hover:border-vitality-500/40'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-vitality-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-vitality-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-vitality-300">Meu Protocolo</h3>
                      <p className="text-xs text-gray-500">Perfil personalizado</p>
                    </div>
                  </button>
                </div>

                <div className="mb-4 pt-4 border-t border-gray-800">
                  <h2 className="text-sm font-semibold text-gray-400 mb-2">MÓDULOS</h2>
                </div>

                <nav className="space-y-2">
                  {manualData.modules.map((module) => (
                    <div key={module.id} className="mb-4">
                      <button
                        onClick={() => {
                          setSpecialView(null)
                          setCurrentModule(module.id)
                          setCurrentSection(module.sections[0]?.id || null)
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all ${
                          currentModule === module.id && !specialView
                            ? 'bg-energy-500/20 border border-energy-500/30'
                            : 'hover:bg-dark-700'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-xs font-medium text-energy-400">
                            {module.number}
                          </span>
                          <span className="text-xs text-gray-500">{module.pages}</span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{module.title}</h3>
                        <p className="text-xs text-gray-400">{module.description}</p>
                      </button>

                      {currentModule === module.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 ml-4 space-y-1 border-l-2 border-energy-500/30 pl-4"
                        >
                          {module.sections.map((section) => (
                            <button
                              key={section.id}
                              onClick={() => {
                                setCurrentSection(section.id)
                                scrollToTop()
                              }}
                              className={`w-full text-left p-2 rounded-lg text-sm transition-all ${
                                currentSection === section.id
                                  ? 'bg-energy-500/10 text-energy-300'
                                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {section.type === 'quiz' && <CheckCircle2 className="w-4 h-4" />}
                                {section.type === 'form' && <FileText className="w-4 h-4" />}
                                {section.type === 'checklist' && <CheckCircle2 className="w-4 h-4" />}
                                {section.type === 'template' && <FileText className="w-4 h-4" />}
                                <span>{section.title}</span>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}

                  {/* Bonus Section Separator */}
                  {bonusModules.length > 0 && (
                    <>
                      <div className="my-6 pt-4 border-t border-gray-700">
                        <h2 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                          <span>🎁</span> BÔNUS EXCLUSIVOS
                        </h2>
                      </div>

                      {bonusModules.map((bonus) => (
                        <div key={bonus.id} className="mb-4">
                          <button
                            onClick={() => {
                              setSpecialView(null)
                              setCurrentModule(bonus.id)
                              setCurrentSection(bonus.sections[0]?.id || null)
                            }}
                            className={`w-full text-left p-3 rounded-xl transition-all ${
                              currentModule === bonus.id && !specialView
                                ? 'bg-yellow-500/20 border border-yellow-500/30'
                                : 'hover:bg-dark-700 border border-yellow-500/10'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-1">
                              <span className="text-xs font-medium text-yellow-400">
                                {bonus.number}
                              </span>
                              <span className="text-xs text-gray-500">{bonus.pages}</span>
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{bonus.title}</h3>
                            <p className="text-xs text-gray-400">{bonus.description}</p>
                          </button>

                          {currentModule === bonus.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-2 ml-4 space-y-1 border-l-2 border-yellow-500/30 pl-4"
                            >
                              {bonus.sections.map((section) => (
                                <button
                                  key={section.id}
                                  onClick={() => {
                                    setCurrentSection(section.id)
                                    scrollToTop()
                                  }}
                                  className={`w-full text-left p-2 rounded-lg text-sm transition-all ${
                                    currentSection === section.id
                                      ? 'bg-yellow-500/10 text-yellow-300'
                                      : 'text-gray-400 hover:text-white hover:bg-dark-700'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {section.type === 'checklist' && <CheckCircle2 className="w-4 h-4" />}
                                    {section.type === 'content' && <FileText className="w-4 h-4" />}
                                    <span>{section.title}</span>
                                  </div>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </>
                  )}
                </nav>
              </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main ref={mainContentRef} className="flex-1 overflow-y-auto h-[calc(100vh-73px)]">
          <div className="max-w-4xl mx-auto px-4 py-8 print:max-w-full print:px-8">
            {specialView === 'missao' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Missao7Dias onNavigate={handleSpecialNavigate} />
              </motion.div>
            ) : specialView === 'protocolo' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ProtocoloPessoal onNavigate={handleSpecialNavigate} />
              </motion.div>
            ) : !currentModule ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Welcome Hero */}
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-energy-500 to-energy-600 mb-6 glow-orange">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3">
                    Bem-vindo ao <span className="gradient-text">Energia Sem Limites</span>
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Nos próximos 7 dias, você vai descobrir exatamente por que está cansado 
                    e o que fazer a respeito. Sua jornada começa agora.
                  </p>
                </div>

                {/* Mission CTA */}
                <div className="bg-gradient-to-br from-energy-500/10 to-vitality-500/10 rounded-2xl p-8 border border-energy-500/20">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-energy-500/20 border border-energy-500/30 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-8 h-8 text-energy-400" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">Comece pela Missão 7 Dias</h3>
                      <p className="text-gray-400">
                        Um passo a passo guiado que transforma informação em ação. 
                        Cada dia tem tarefas claras, insights e recompensas.
                        <strong className="text-white"> É o caminho mais rápido para resultados.</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => { setSpecialView('missao'); scrollToTop(); }}
                      className="px-6 py-3 bg-gradient-to-r from-energy-500 to-energy-600 rounded-xl font-bold text-white flex items-center gap-2 flex-shrink-0"
                    >
                      <Sparkles className="w-5 h-5" />
                      Começar Missão
                    </button>
                  </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleSpecialNavigate('modulo-1', 'quiz-fome-cerebral')}
                    className="p-6 bg-dark-800 rounded-2xl border border-gray-800 hover:border-energy-500/30 transition-all text-left"
                  >
                    <div className="text-2xl mb-3">🧪</div>
                    <h4 className="font-bold text-white mb-1">Fazer o Quiz</h4>
                    <p className="text-sm text-gray-500">Descubra em 3 min quais nutrientes podem estar faltando no seu corpo</p>
                  </button>

                  <button
                    onClick={() => { setSpecialView('protocolo'); scrollToTop(); }}
                    className="p-6 bg-dark-800 rounded-2xl border border-gray-800 hover:border-vitality-500/30 transition-all text-left"
                  >
                    <div className="text-2xl mb-3">📊</div>
                    <h4 className="font-bold text-white mb-1">Meu Protocolo</h4>
                    <p className="text-sm text-gray-500">Seu perfil nutricional personalizado com prioridades e próximos passos</p>
                  </button>

                  <button
                    onClick={() => handleSpecialNavigate('', 'tracker-sintomas-energia')}
                    className="p-6 bg-dark-800 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all text-left"
                  >
                    <div className="text-2xl mb-3">📈</div>
                    <h4 className="font-bold text-white mb-1">Tracker Diário</h4>
                    <p className="text-sm text-gray-500">Registre como está se sentindo hoje. Em 21 dias, você verá a evolução</p>
                  </button>

                  <button
                    onClick={() => handleSpecialNavigate('modulo-1', 'fome-cerebral')}
                    className="p-6 bg-dark-800 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all text-left"
                  >
                    <div className="text-2xl mb-3">📖</div>
                    <h4 className="font-bold text-white mb-1">Ir Direto ao Manual</h4>
                    <p className="text-sm text-gray-500">Comece a ler do Módulo 1 se preferir explorar no seu ritmo</p>
                  </button>
                </div>

                {/* Disclaimer */}
                <div className="bg-dark-800 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                      Material 100% educacional. Não substitui consulta médica ou nutricional. 
                      Use o conhecimento para ter conversas mais informadas com profissionais de saúde.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : selectedSection ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSection.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 print:hidden">
                    <span>{selectedModule?.number}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white">{selectedSection.title}</span>
                  </div>

                  {/* Content based on section type */}
                  {selectedSection.type === 'quiz' && (
                    <QuizFomeCerebral 
                      questions={selectedSection.quiz || []} 
                      viewMode={viewMode}
                    />
                  )}
                  
                  {selectedSection.type === 'form' && selectedSection.form?.type === 'diario-alimentar' && (
                    <DiarioAlimentar viewMode={viewMode} />
                  )}
                  
                  {selectedSection.type === 'checklist' && (
                    <ChecklistFatoresRisco 
                      items={selectedSection.content || []} 
                      viewMode={viewMode}
                    />
                  )}
                  
                  {selectedSection.type === 'template' && (
                    <TemplateCarta 
                      content={selectedSection.content || []} 
                      viewMode={viewMode}
                    />
                  )}
                  
                  {selectedSection.type === 'content' && (
                    <ModuloContent 
                      title={selectedSection.title}
                      content={selectedSection.content || []}
                      viewMode={viewMode}
                    />
                  )}
                  
                  {selectedSection.type === 'tracker' && (
                    <TrackerSintomas viewMode={viewMode} />
                  )}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400">Selecione uma seção para começar</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 2cm;
          }
          body {
            background: white;
            color: black;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
        }
      `}</style>
    </div>
  )
}
