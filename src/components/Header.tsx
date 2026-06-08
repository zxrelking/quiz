import { RotateCw } from 'lucide-react';

interface HeaderProps {
  appName: string;
  totalQuestions: number;
  totalAnswered: number;
  correctCount: number;
  incorrectCount: number;
  onReset: () => void;
}

export default function Header({
  appName,
  totalQuestions,
  totalAnswered,
  correctCount,
  incorrectCount,
  onReset,
}: HeaderProps) {
  const percentComplete = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 h-14 select-none flex flex-col justify-center border-b border-slate-800 shadow-md" id="quiz-header">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Brand Identifier */}
        <div className="flex items-center gap-1.5 shrink">
          <span className="text-[10px] font-black tracking-widest text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/10 hidden xs:inline-block">
            SE
          </span>
          <h1 className="text-[11px] sm:text-xs font-black text-slate-100 uppercase tracking-widest whitespace-nowrap">
            {appName}
          </h1>
        </div>

        {/* Compact Dynamic Stats Row */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 text-[10px] sm:text-xs font-bold text-slate-300">
          
          {/* Progress and [Accuracy%] */}
          <div className="flex items-center gap-1">
            <span>Completed: <strong className="text-white font-black">{totalAnswered}/{totalQuestions}</strong></span>
            <span className="text-indigo-400 font-extrabold bg-indigo-500/10 px-1 py-0.5 rounded border border-indigo-550/10">
              [{accuracy}%]
            </span>
          </div>

          {/* Correct Counter */}
          <span className="text-emerald-400 font-black bg-emerald-500/10 border border-emerald-500/10 px-1.5 py-0.5 rounded">
            ✓{correctCount}
          </span>

          {/* Wrong Counter */}
          <span className="text-rose-400 font-black bg-rose-500/10 border border-rose-500/10 px-1.5 py-0.5 rounded">
            ✗{incorrectCount}
          </span>

          {/* Slim Reset Button */}
          <button
            onClick={onReset}
            className="flex items-center justify-center p-1 px-1.5 bg-slate-800 hover:bg-slate-750 active:scale-95 text-slate-200 hover:text-white rounded-md transition-all duration-150 cursor-pointer border border-slate-700 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider"
            title="Reset active workbook results"
            id="btn-reset-header"
          >
            <RotateCw className="w-3 h-3 text-indigo-400" />
            <span className="ml-1 hidden xs:inline-block">Reset</span>
          </button>
        </div>
      </div>

      {/* Thin Slider Progress Bar Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800">
        <div
          className="bg-indigo-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${percentComplete}%` }}
        ></div>
      </div>
    </header>
  );
}
