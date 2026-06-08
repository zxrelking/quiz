import { useState, useMemo } from 'react';
import { 
  ALL_QUESTIONS, 
  SHEET_1_MCQ, 
  SHEET_1_TF, 
  SHEET_2_MCQ, 
  SHEET_2_TF, 
  SHEET_3_MCQ, 
  SHEET_3_TF 
} from './questionsData';
import { Question } from './types';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import RatingCard from './components/RatingCard';
import { 
  ShieldCheck, 
  Settings, 
  HelpCircle, 
  Layers, 
  Filter, 
  CheckCircle,
  XCircle, 
  BookOpen, 
  Search, 
  Check, 
  Sparkles,
  ArrowRight,
  BookMarked,
  Info
} from 'lucide-react';

export default function App() {
  // Navigation tabs state: 'sheet1' | 'sheet2' | 'sheet3' | 'combined'
  const [currentTab, setCurrentTab] = useState<'sheet1' | 'sheet2' | 'sheet3' | 'combined'>('sheet1');

  // Answers tracker map (maps question ID -> option string or 'TRUE'/'FALSE')
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});

  // Search filter query state
  const [searchQuery, setSearchQuery] = useState('');

  // Practice helper active subset switches
  const [sheet1Filter, setSheet1Filter] = useState<'all' | 'MCQ' | 'TF'>('all');
  const [sheet2Filter, setSheet2Filter] = useState<'all' | 'MCQ' | 'TF'>('all');
  const [sheet3Filter, setSheet3Filter] = useState<'all' | 'MCQ' | 'TF'>('all');

  // Handle choice submissions
  const handleSelectAnswer = (questionId: string, choice: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  // Switch tab and scroll to top smoothly
  const handleSwitchTab = (tab: 'sheet1' | 'sheet2' | 'sheet3' | 'combined') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset answer states
  const handleResetQuiz = () => {
    if (confirm('Are you sure you want to reset all your answer submissions for this session?')) {
      setAnswers({});
    }
  };

  // Compute active question arrays per tab
  const sheet1Questions = useMemo(() => {
    let questions = [...SHEET_1_MCQ, ...SHEET_1_TF];
    if (sheet1Filter === 'MCQ') {
      questions = [...SHEET_1_MCQ];
    } else if (sheet1Filter === 'TF') {
      questions = [...SHEET_1_TF];
    }
    return questions;
  }, [sheet1Filter]);

  // For Sheet 2: 
  const sheet2Questions = useMemo(() => {
    let questions = [...SHEET_2_MCQ, ...SHEET_2_TF];
    if (sheet2Filter === 'MCQ') {
      questions = [...SHEET_2_MCQ];
    } else if (sheet2Filter === 'TF') {
      questions = [...SHEET_2_TF];
    }
    return questions;
  }, [sheet2Filter]);

  const sheet3Questions = useMemo(() => {
    let questions = [...SHEET_3_TF, ...SHEET_3_MCQ]; // Section A is TF, Section B is MCQ in sheet 3
    if (sheet3Filter === 'MCQ') {
      questions = [...SHEET_3_MCQ];
    } else if (sheet3Filter === 'TF') {
      questions = [...SHEET_3_TF];
    }
    return questions;
  }, [sheet3Filter]);

  // Combined tab unites Sheet 1 active set, Sheet 2 active set, and Sheet 3 active set!
  const combinedQuestions = useMemo(() => {
    return [...sheet1Questions, ...sheet2Questions, ...sheet3Questions];
  }, [sheet1Questions, sheet2Questions, ...sheet3Questions]);

  // Dynamic filter based on free text search (across current active questions list)
  const filterBySearch = (questionList: Question[]) => {
    if (!searchQuery.trim()) return questionList;
    const query = searchQuery.toLowerCase();
    return questionList.filter(
      (q) => 
        q.text.toLowerCase().includes(query) || 
        q.explanation.toLowerCase().includes(query) ||
        (q.options && q.options.some((o) => o.toLowerCase().includes(query)))
    );
  };

  const activeQuestionsFiltered = useMemo(() => {
    switch (currentTab) {
      case 'sheet1':
        return filterBySearch(sheet1Questions);
      case 'sheet2':
        return filterBySearch(sheet2Questions);
      case 'sheet3':
        return filterBySearch(sheet3Questions);
      case 'combined':
        return filterBySearch(combinedQuestions);
      default:
        return [];
    }
  }, [currentTab, sheet1Questions, sheet2Questions, sheet3Questions, combinedQuestions, searchQuery]);

  // Counters values for current active list
  const currentTotalCount = activeQuestionsFiltered.length;
  const currentAnsweredCount = useMemo(() => {
    return activeQuestionsFiltered.filter((q) => answers[q.id] !== undefined).length;
  }, [activeQuestionsFiltered, answers]);

  const currentResultStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    activeQuestionsFiltered.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        if (userAns === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });
    return { correct, incorrect };
  }, [activeQuestionsFiltered, answers]);

  // Universal stats across all 60 possible workbook questions (overall status tracking)
  const overallStats = useMemo(() => {
    let totals = ALL_QUESTIONS.length;
    let answered = 0;
    let correct = 0;
    let incorrect = 0;

    ALL_QUESTIONS.forEach((q) => {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        answered++;
        if (userAns === q.correctAnswer) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    return { totals, answered, correct, incorrect };
  }, [answers]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900" id="app-root">
      
      {/* Dynamic Compact Header Component */}
      <Header
        appName="SE quiz platform"
        totalQuestions={currentTotalCount}
        totalAnswered={currentAnsweredCount}
        correctCount={currentResultStats.correct}
        incorrectCount={currentResultStats.incorrect}
        onReset={handleResetQuiz}
      />

      <main className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-8">

        {/* Tab Selection Header and Dynamic Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Main Quiz Columns */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-4.5 sm:space-y-6">
            
            {/* Compact Tab Headers with counter pills */}
            <div className="border-b border-slate-200 pb-3" id="navigation-bar">
              <div className="flex flex-wrap gap-1 bg-slate-200/50 p-1 rounded-xl w-full sm:w-max">
                {/* Tab Sheet 1 */}
                <button
                  onClick={() => handleSwitchTab('sheet1')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                    currentTab === 'sheet1'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/30'
                  }`}
                  id="tab-btn-sheet1"
                >
                  <span>Sheet 1</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${currentTab === 'sheet1' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-300 text-slate-600'}`}>
                    {sheet1Questions.length}
                  </span>
                </button>

                {/* Tab Sheet 2 */}
                <button
                  onClick={() => handleSwitchTab('sheet2')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                    currentTab === 'sheet2'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/30'
                  }`}
                  id="tab-btn-sheet2"
                >
                  <span>Sheet 2</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${currentTab === 'sheet2' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-300 text-slate-600'}`}>
                    {sheet2Questions.length}
                  </span>
                </button>

                {/* Tab Sheet 3 */}
                <button
                  onClick={() => handleSwitchTab('sheet3')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                    currentTab === 'sheet3'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/30'
                  }`}
                  id="tab-btn-sheet3"
                >
                  <span>Sheet 3</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${currentTab === 'sheet3' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-300 text-slate-600'}`}>
                    {sheet3Questions.length}
                  </span>
                </button>

                {/* Tab Combined */}
                <button
                  onClick={() => handleSwitchTab('combined')}
                  className={`flex-1 sm:flex-initial px-3 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer ${
                    currentTab === 'combined'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                  id="tab-btn-combined"
                >
                  <span>Combined</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-black ${currentTab === 'combined' ? 'bg-indigo-500 text-white' : 'bg-slate-300 text-slate-600'}`}>
                    {combinedQuestions.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick banner helper for Sheet 1 */}
            {currentTab === 'sheet1' && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border border-slate-200/80 rounded-2xl md:rounded-[1.4rem] p-4.5 sm:p-5 gap-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 shrink-0">
                    <Info className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Sheet 1 Segment Highlights</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      Choose to practice Section A (10 MCQ questions pasted from workbook) or Section B (10 True/False ones).
                    </p>
                  </div>
                </div>

                {/* Sub filter controls */}
                <div className="flex items-center gap-1.5 shrink-0 bg-slate-100 p-1.5 rounded-xl">
                  {(['all', 'MCQ', 'TF'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSheet1Filter(mode)}
                      className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors cursor-pointer capitalize ${
                        sheet1Filter === mode
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                      id={`btn-filter-s1-${mode}`}
                    >
                      {mode === 'all' ? 'All 20' : mode === 'MCQ' ? '10 MCQs' : '10 T/F'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick banner helper for Sheet 2 */}
            {currentTab === 'sheet2' && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border border-slate-200/80 rounded-2xl md:rounded-[1.4rem] p-4.5 sm:p-5 gap-3 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 shrink-0">
                    <Info className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Sheet 2 Segment Highlights</h4>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                      Choose to practice Section A (10 MCQ questions pasted from workbook) or Section B (10 True/False ones).
                    </p>
                  </div>
                </div>

                {/* Sub filter controls */}
                <div className="flex items-center gap-1.5 shrink-0 bg-slate-100 p-1.5 rounded-xl">
                  {(['all', 'MCQ', 'TF'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSheet2Filter(mode)}
                      className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors cursor-pointer capitalize ${
                        sheet2Filter === mode
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                      id={`btn-filter-s2-${mode}`}
                    >
                      {mode === 'all' ? 'All 20' : mode === 'MCQ' ? '10 MCQs' : '10 T/F'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Custom controls on Sheet 3 */}
            {currentTab === 'sheet3' && (
              <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[1.4rem] p-4.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-indigo-50 text-indigo-750 border border-indigo-150 rounded-xl font-black text-xs uppercase tracking-wider shrink-0">
                    UML
                  </span>
                  <div className="text-left">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Sheet 3 Section Highlights</h4>
                    <p className="text-xs text-slate-500 mt-1">UML diagrams notations, structural representations, and classes relationships.</p>
                  </div>
                </div>

                {/* Sub filter controls for Sheet 3 */}
                <div className="flex items-center gap-1.5 shrink-0 bg-slate-100 p-1.5 rounded-xl">
                  {(['all', 'MCQ', 'TF'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setSheet3Filter(mode)}
                      className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-lg transition-colors cursor-pointer capitalize ${
                        sheet3Filter === mode
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                      id={`btn-filter-s3-${mode}`}
                    >
                      {mode === 'all' ? 'All 20' : mode === 'MCQ' ? '10 MCQs' : '10 T/F'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Active Quiz Question List Grid */}
            <div className="space-y-6">
              {activeQuestionsFiltered.length > 0 ? (
                activeQuestionsFiltered.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    selectedAnswer={answers[q.id]}
                    onSelectAnswer={handleSelectAnswer}
                  />
                ))
              ) : (
                <div className="bg-white border select-none rounded-[2rem] p-12 text-center text-slate-500 space-y-4" id="empty-state">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto animate-bounce animate-duration-1000" />
                  <h4 className="text-lg font-bold text-slate-700">No active matches found</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try adjusting your selection filters or verify you have selected indices in the dynamic picker options.
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl mt-2 cursor-pointer"
                      id="btn-reset-filters"
                    >
                      Clear Search Query
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Performance Ratings section showing user achievements */}
            {/* "After I'm done with all the questions, give me a rating for how many correct answers I got and how many wrong answers I got." */}
            <div className="pt-8 border-t border-slate-200 mt-12 bg-slate-50">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 uppercase">Active Set Finish Dashboard</h3>
                  <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">Submit your answers recursively above to review your rating below.</p>
                </div>

                <RatingCard
                  totalQuestions={currentTotalCount}
                  totalAnswered={currentAnsweredCount}
                  correctCount={currentResultStats.correct}
                  incorrectCount={currentResultStats.incorrect}
                  onReset={() => {
                    // Reset only answers matching active questions in this view to offer partial retries!
                    const currentIds = activeQuestionsFiltered.map(q => q.id);
                    setAnswers(prev => {
                      const copy = { ...prev };
                      currentIds.forEach(id => delete copy[id]);
                      return copy;
                    });
                  }}
                  title={`Ratings for active ${currentTab.toUpperCase()} set`}
                />
              </div>
            </div>

          </div>

          {/* Side Helper Panel & Stats (Renders on left for desktop screen resolutions) */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-5 lg:sticky lg:top-20">
            
            {/* Quick Practice stats breakdown */}
            <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[1.6rem] p-5 shadow-sm space-y-4" id="practice-status-card">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                Live Practice Insights
              </h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-extrabold mb-1.5 text-slate-500">
                    <span className="uppercase tracking-wider">Active Deck Completion</span>
                    <span className="text-slate-900 font-black">{currentAnsweredCount} / {currentTotalCount}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${currentTotalCount > 0 ? (currentAnsweredCount / currentTotalCount) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                {/* Score counters for MCQs vs T/F questions specifically inside this active selection */}
                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100/50 text-left">
                    <p className="text-[9px] uppercase font-bold text-emerald-600 tracking-wider">Correct</p>
                    <p className="text-2xl font-black text-emerald-700 mt-1">{currentResultStats.correct}</p>
                    <span className="text-[9px] text-emerald-650 font-bold uppercase tracking-wider">{currentAnsweredCount > 0 ? Math.round((currentResultStats.correct / currentAnsweredCount) * 100) : 0}% rate</span>
                  </div>
                  <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100/50 text-left">
                    <p className="text-[9px] uppercase font-bold text-rose-500 tracking-wider">Wrong</p>
                    <p className="text-2xl font-black text-rose-700 mt-1">{currentResultStats.incorrect}</p>
                    <span className="text-[9px] text-rose-600 font-bold uppercase tracking-wider">{currentAnsweredCount > 0 ? Math.round((currentResultStats.incorrect / currentAnsweredCount) * 100) : 0}% rate</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 text-xs text-slate-500 leading-relaxed text-left font-medium">
                  🌟 <strong>Glowing feedback is active:</strong> Choose options to immediately reveal correct or wrong answers. Correct choices trigger an elegant <strong className="text-emerald-700">emerald glow</strong>, while mistakes trigger a <strong className="text-rose-500">rose glow</strong> with deep conceptual justifications.
                </div>
              </div>
            </div>

            {/* Quick Workbook Index Navigation links */}
            <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[1.6rem] p-5 shadow-sm space-y-3" id="workbook-outline-card">
              <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400 border-b border-slate-100 pb-2">
                Workbook Chapters
              </h4>
              <ul className="space-y-1 text-xs font-semibold">
                {/* Fundamentals item */}
                <li 
                  onClick={() => handleSwitchTab('sheet1')}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
                    currentTab === 'sheet1' ? 'bg-indigo-50 text-indigo-750 font-bold' : 'hover:bg-slate-55 text-slate-600'
                  }`}
                  id="nav-catalogue-sheet1"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-505 shrink-0"></span>
                    Sheet 1: Fundamentals
                  </span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-500 shrink-0">20 Qs</span>
                </li>

                {/* Ethics link */}
                <li 
                  onClick={() => handleSwitchTab('sheet2')}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
                    currentTab === 'sheet2' ? 'bg-indigo-50 text-indigo-755 font-bold' : 'hover:bg-slate-55 text-slate-605'
                  }`}
                  id="nav-catalogue-sheet2"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    Sheet 2: Ethics
                  </span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-555 shrink-0">20 Qs</span>
                </li>

                {/* UML link */}
                <li 
                  onClick={() => handleSwitchTab('sheet3')}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
                    currentTab === 'sheet3' ? 'bg-indigo-50 text-indigo-755 font-bold' : 'hover:bg-slate-55 text-slate-605'
                  }`}
                  id="nav-catalogue-sheet3"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0"></span>
                    Sheet 3: Modelling
                  </span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-555 shrink-0">20 Qs</span>
                </li>

                {/* Combined link */}
                <li 
                  onClick={() => handleSwitchTab('combined')}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
                    currentTab === 'combined' ? 'bg-slate-900 text-white font-bold' : 'hover:bg-slate-55 text-slate-605'
                  }`}
                  id="nav-catalogue-combined"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                    Combined Pool
                  </span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-500 shrink-0">{sheet1Questions.length + sheet2Questions.length + sheet3Questions.length} Qs</span>
                </li>
              </ul>
            </div>

            {/* App Creator Credit / Information Badge */}
            <div className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Prepared from the Combined Workbook by Hossam Hesham • 2026 Academic Edition
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
