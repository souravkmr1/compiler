import React from 'react';
import { 
  Play, 
  Download, 
  Copy, 
  Share, 
  RotateCcw, 
  Settings, 
  Sun, 
  Moon,
  BookOpen,
  GraduationCap,
  FileText,
  TestTube
} from 'lucide-react';

interface HeaderProps {
  onRun: () => void;
  onDownload: () => void;
  onCopy: () => void;
  onShare: () => void;
  onReset: () => void;
  onSettings: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onDownload,
  onCopy,
  onShare,
  onReset,
  onSettings,
  isDarkMode,
  onThemeToggle
}) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">ScholarHat</span>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4">
        
            <a href="#" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Free Courses</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
              <FileText className="w-4 h-4" />
              <span>Free Interview EBooks</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
              <TestTube className="w-4 h-4" />
              <span>Free skill Tests</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
              <TestTube className="w-4 h-4" />
              <span>Free Masterclass</span>
            </a>
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Editor Controls */}
          <div className="hidden sm:flex items-center space-x-2 mr-4">
            <button
              onClick={onRun}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Run</span>
              <span className="text-xs opacity-75">Ctrl+Enter</span>
            </button>
            <button
              onClick={onDownload}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Download"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onCopy}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Copy"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={onShare}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Share"
            >
              <Share className="w-4 h-4" />
            </button>
            <button
              onClick={onReset}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onSettings}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Free C# Course
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;