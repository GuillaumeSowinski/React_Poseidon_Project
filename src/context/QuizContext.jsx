
import { createContext, useReducer, useContext } from 'react';

const initialState = {
    questions: [
        {
            id: 1,
            category: "Math",
            question: "Combien font 2+2 ?",
            answer: "4",
            validation: null,
        },
        {
            id: 2,
            category: "Science",
            question: "Quelle est la formule de l'eau ?",
            answer: "H2O",
            validation: null,
        },
        {
            id: 3,
            category: "Histoire",
            question: "Qui a découvert l'Amérique ?",
            answer: "Christophe Colomb",
            validation: null,
        },
    ],
    selectedCategory: 'Toutes',
};

function quizReducer(state, action) {
    switch (action.type) {
        case 'SET_CATEGORY':
            return { ...state, selectedCategory: action.category };
        case 'VALIDATE_QUESTION':
            return {
                ...state,
                questions: state.questions.map(question => {
                    if (question.id === action.id && question.validation === null) {
                        return { ...question, validation: action.validation };
                    }
                    return question;
                }),
            };
        default:
            return state;
    }
}

const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuiz() {
    return useContext(QuizContext);
}
