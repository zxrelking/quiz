import { Question } from '../types';
import { Check, X, Info, Sparkles, BookOpen } from 'lucide-react';

interface QuestionCardProps {
  key?: string;
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (questionId: string, choice: string) => void;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;

  // Compute glowing classes based on correct/incorrect status as requested:
  // "Once I make my choice, it will appear if the answer I chose is correct or not by glowing green or red around the square that has the question and the answer."
  const glowClass = isAnswered
    ? isCorrect
      ? 'border-[#10b981] bg-emerald-50/50 shadow-[0_0_25px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20'
      : 'border-[#f43f5e] bg-rose-50/50 shadow-[0_0_25px_rgba(244,63,94,0.25)] ring-2 ring-rose-500/20'
    : 'border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300';

  return (
    <div
      className={`rounded-[2rem] border p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${glowClass}`}
      id={`question-card-${question.id}`}
    >
      {/* Decorative Label */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-indigo-500/80" />
          Sheet {question.sheet} • Q{question.number}
        </span>
        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
          {question.section === 'MCQ' ? 'Multiple Choice' : 'True / False'}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-6">
        {question.text}
      </h2>

      {/* Answers Choices Box */}
      <div className="space-y-3">
        {question.section === 'MCQ' && question.options ? (
          // Render 4 Multiple Choice options (a, b, c, d)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, idx) => {
              const letter = String.fromCharCode(97 + idx); // 'a', 'b', 'c', 'd'
              const isSelected = selectedAnswer === letter;
              const isThisOptionCorrect = letter === question.correctAnswer;

              let optionBg = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';
              if (isAnswered) {
                if (isSelected) {
                  optionBg = isCorrect
                    ? 'border-2 border-emerald-500 bg-emerald-50 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-990 font-bold'
                    : 'border-2 border-rose-500 bg-rose-50 shadow-[0_0_15px_rgba(244,63,94,0.2)] text-rose-990 font-bold';
                } else if (isThisOptionCorrect) {
                  // Highlight the correct option even if user selected the wrong one
                  optionBg = 'border-2 border-emerald-500/60 bg-emerald-50/70 text-emerald-900 font-semibold';
                } else {
                  optionBg = 'bg-white border-slate-150 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={letter}
                  onClick={() => !isAnswered && onSelectAnswer(question.id, letter)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center gap-4 cursor-pointer md:hover:scale-[1.005] group ${optionBg}`}
                  id={`btn-option-${question.id}-${letter}`}
                >
                  {/* Visual Option Badge (A, B, C, D) inside bento styles */}
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 transition-colors ${
                      isSelected
                        ? isCorrect
                          ? 'bg-emerald-500 text-white'
                          : 'bg-rose-500 text-white'
                        : isThisOptionCorrect && isAnswered
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                    }`}
                  >
                    {letter.toUpperCase()}
                  </span>

                  <span className="flex-1 text-sm font-medium leading-snug">{option}</span>

                  {/* State Icons */}
                  {isAnswered && isSelected && (
                    <span className="shrink-0">
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-emerald-600 font-extrabold" />
                      ) : (
                        <X className="w-5 h-5 text-rose-600 font-extrabold" />
                      )}
                    </span>
                  )}
                  {isAnswered && !isSelected && isThisOptionCorrect && (
                    <span className="shrink-0 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                      Correct
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          // Render True & False choices beautifully
          <div className="grid grid-cols-2 gap-4">
            {['TRUE', 'FALSE'].map((choiceValue) => {
              const isSelected = selectedAnswer === choiceValue;
              const isThisOptionCorrect = choiceValue === question.correctAnswer;

              let optionBg = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';
              if (isAnswered) {
                if (isSelected) {
                  optionBg = isCorrect
                    ? 'border-2 border-emerald-500 bg-emerald-50 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-990 font-bold'
                    : 'border-2 border-rose-500 bg-rose-50 shadow-[0_0_15px_rgba(244,63,94,0.2)] text-rose-990 font-bold';
                } else if (isThisOptionCorrect) {
                  optionBg = 'border-2 border-emerald-500/60 bg-emerald-50/70 text-emerald-900 font-bold';
                } else {
                  optionBg = 'bg-white border-slate-150 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={choiceValue}
                  onClick={() => !isAnswered && onSelectAnswer(question.id, choiceValue)}
                  disabled={isAnswered}
                  className={`text-center p-5 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer md:hover:scale-[1.01] ${optionBg}`}
                  id={`btn-option-${question.id}-${choiceValue}`}
                >
                  <span className="text-base font-bold uppercase tracking-wider">{choiceValue}</span>
                  {isAnswered && isSelected && (
                    <span>
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-emerald-600 font-bold" />
                      ) : (
                        <X className="w-5 h-5 text-rose-600 font-bold" />
                      )}
                    </span>
                  )}
                  {isAnswered && !isSelected && isThisOptionCorrect && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      Correct Choice
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Explanation Segment after choice is locked */}
      {isAnswered && (
        <div className={`mt-5 pt-5 border-t ${isCorrect ? 'border-emerald-150' : 'border-rose-150'} animate-fadeIn`}>
          <div className="flex items-start gap-3 bg-slate-50/80 rounded-2xl p-4 text-xs text-slate-600 leading-relaxed border border-slate-200/60">
            <Info className={`w-4 h-4 shrink-0 mt-0.5 ${isCorrect ? 'text-emerald-500' : 'text-rose-400'}`} />
            <div>
              <span className="font-bold text-slate-800 block mb-1 uppercase tracking-wider text-[10px]">
                {isCorrect ? 'Double Verification ✓' : 'Concept Explanation'}
              </span>
              {question.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
