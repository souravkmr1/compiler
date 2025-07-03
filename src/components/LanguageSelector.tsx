import React from 'react';
import { Code, Terminal } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages: Language[] = [
  { id: 'python', name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
  { id: 'java', name: 'Java', icon: '☕', color: 'bg-red-500' },
  { id: 'c', name: 'C', icon: '©', color: 'bg-blue-500' },
  { id: 'cpp', name: 'C++', icon: '⚡', color: 'bg-blue-600' },
  { id: 'csharp', name: 'C#', icon: '#', color: 'bg-purple-600' },
  { id: 'javascript', name: 'JavaScript', icon: 'JS', color: 'bg-yellow-400' },
  { id: 'typescript', name: 'TypeScript', icon: 'TS', color: 'bg-blue-500' },
  { id: 'html', name: 'HTML', icon: '<>', color: 'bg-orange-500' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange
}) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2 mb-4">
          <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Languages</h2>
        </div>
      </div>
      
      <div className="flex-1 p-2 overflow-y-auto">
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => onLanguageChange(language.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                selectedLanguage === language.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg ${language.color} flex items-center justify-center text-white font-semibold text-sm`}>
                {language.icon}
              </div>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3 h-3" />
            <span>Shortcuts:</span>
          </div>
          <div className="pl-5 space-y-1">
            <div>Ctrl+Enter: Run code</div>
            <div>Ctrl+S: Save file</div>
            <div>Ctrl+/: Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;