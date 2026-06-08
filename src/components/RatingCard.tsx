import { Star, Award, RotateCw, RefreshCw, ThumbsUp, PartyPopper } from 'lucide-react';

interface RatingCardProps {
  totalQuestions: number;
  totalAnswered: number;
  correctCount: number;
  incorrectCount: number;
  onReset: () => void;
  title?: string;
}

export default function RatingCard({
  totalQuestions,
  totalAnswered,
  correctCount,
  incorrectCount,
  onReset,
  title = "Performance Rating Summary",
}: RatingCardProps) {
  const percentComplete = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;
  const isFinished = percentComplete === 100;

  // Accuracy calculation
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Star Rating out of 5 based on accuracy percentage
  let starsCount = 0;
  if (totalAnswered > 0) {
    if (accuracy >= 95) starsCount = 5;
    else if (accuracy >= 75) starsCount = 4;
    else if (accuracy >= 50) starsCount = 3;
    else if (accuracy >= 30) starsCount = 2;
    else starsCount = 1;
  }

  // Qualitative Honor Title
  let honorTitle = "Active Participant";
  let honorDescription = "Perfect your scores by reading the explanations on incorrect questions.";
  let badgeColor = "bg-indigo-50 border-indigo-200 text-indigo-700";

  if (accuracy === 100) {
    honorTitle = "Distinguished Software Engineering Fellow";
    honorDescription = "Sublime! You demonstrated absolute mastery over Fundamentals, Ethics, and System Modelling.";
    badgeColor = "bg-amber-50 border-amber-200 text-amber-700";
  } else if (accuracy >= 85) {
    honorTitle = "Senior Tech Lead Architect";
    honorDescription = "Excellent analytical skills! You have a highly comprehensive grasp of standard software design patterns.";
    badgeColor = "bg-emerald-50 border-emerald-200 text-emerald-700";
  } else if (accuracy >= 65) {
    honorTitle = "Certified Systems Engineer";
    honorDescription = "Solid baseline! You passed with comfortable margins. Double check the ethics rules or UML notations to achieve master rank.";
    badgeColor = "bg-blue-50 border-blue-200 text-blue-700";
  } else if (accuracy >= 45) {
    honorTitle = "Junior Code Analyst";
    honorDescription = "Good foundational start. Review UML notations and modular structure rules to advance your capacity.";
    badgeColor = "bg-orange-50 border-orange-200 text-orange-700";
  } else {
    honorTitle = "Software Engineering Apprentice";
    honorDescription = "A great learning opportunity! Analyze the detailed feedback boxes to solidify your knowledge.";
    badgeColor = "bg-rose-50 border-rose-200 text-rose-700";
  }

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/95 p-8 sm:p-10 text-center shadow-md relative overflow-hidden max-w-2xl mx-auto" id="performance-rating-card">
      
      {/* Title */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {accuracy >= 75 ? (
          <PartyPopper className="w-6 h-6 text-indigo-500 animate-bounce" />
        ) : (
          <Award className="w-6 h-6 text-slate-400" />
        )}
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
      </div>

      {/* Main Score Visual Wheel */}
      <div className="relative w-44 h-44 mx-auto flex flex-col justify-center items-center my-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#f8fafc"
            strokeWidth="10"
            fill="transparent"
          />
          {/* Dynamic filled circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={accuracy >= 80 ? '#10b981' : accuracy >= 50 ? '#6366f1' : '#f43f5e'}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 42}
            strokeDashoffset={2 * Math.PI * 42 * (1 - accuracy / 100)}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
            {accuracy}%
          </span>
          <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">Accuracy</span>
        </div>
      </div>

      {/* Dynamic Star Ratings */}
      {totalAnswered > 0 ? (
        <div className="flex items-center justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 hover:scale-110 ${
                star <= starsCount ? 'text-amber-400 fill-amber-400 drop-shadow' : 'text-slate-100'
              }`}
            />
          ))}
        </div>
      ) : (
          <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-6">Submit responses to unlock metrics.</p>
      )}

      {/* Qualitative Achievement Badge */}
      {totalAnswered > 0 && (
        <div className={`inline-block py-2.5 px-5 rounded-full border-2 font-bold text-xs uppercase tracking-widest ${badgeColor} mb-4 shadow-sm`}>
          {honorTitle}
        </div>
      )}

      {totalAnswered > 0 && (
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-8 leading-relaxed font-medium">
          {honorDescription}
        </p>
      )}

      {/* Detailed nested Stat Grid with Bento Cells */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 transition-transform hover:scale-[1.02]">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Total Pool</p>
          <p className="text-2xl font-black text-slate-900">{totalQuestions}</p>
        </div>
        
        <div className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 transition-transform hover:scale-[1.02]">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Answered</p>
          <p className="text-2xl font-black text-slate-900">{totalAnswered}</p>
        </div>

        <div className="bg-emerald-50/50 border border-emerald-100/60 rounded-2xl p-4 transition-transform hover:scale-[1.02]">
          <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-600/80 mb-1">Correct</p>
          <p className="text-2xl font-black text-emerald-600">{correctCount}</p>
        </div>

        <div className="bg-rose-50/50 border border-rose-100/60 rounded-2xl p-4 transition-transform hover:scale-[1.02]">
          <p className="text-[10px] uppercase tracking-widest font-bold text-rose-500/80 mb-1">Wrong</p>
          <p className="text-2xl font-black text-rose-500">{incorrectCount}</p>
        </div>
      </div>

      {/* Action CTA Block */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-sm px-8 py-3.5 rounded-2xl transition-all shadow-md shadow-indigo-100 hover:shadow-indigo-200/50 cursor-pointer"
          id="btn-retry-results"
        >
          <RefreshCw className="w-4 h-4 animate-spin-slow" />
          <span>Reset and Recalculate</span>
        </button>

        {percentComplete < 100 && (
          <p className="text-xs text-slate-400 mt-2 sm:mt-0 font-bold uppercase tracking-wider">
            Answer the remaining {totalQuestions - totalAnswered} questions to lock findings
          </p>
        )}
      </div>

    </div>
  );
}
