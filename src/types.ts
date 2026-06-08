export interface Question {
  id: string;
  number: number;
  sheet: 1 | 2 | 3;
  section: 'MCQ' | 'TF';
  text: string;
  options?: string[]; // Only for MCQs, e.g., ["set of programs...", ...]
  correctAnswer: string; // 'a', 'b', 'c', 'd' for MCQs, 'TRUE' or 'FALSE' for TF
  explanation: string;
}

export interface QuizState {
  answers: { [questionId: string]: string }; // Maps question ID to user option choice
  sheet2SelectedIndices: number[]; // From 1 to 10, indices of questions the user chose to practice as TF
}
