import React from 'react';
import { Play, Download, Copy, Share, RotateCcw, Settings, Menu } from 'lucide-react';

interface MobileToolbarProps {
  onRun: () => void;
  onDownload: () => void;
  onCopy: () => void;
  onShare: () => void;
  onReset: () => void;
  onSettings: () => void;
  onMenuToggle: () => void;
}

const MobileToolbar: React.FC<MobileToolbarProps> = ({
  onRun,
  onDownload,
  onCopy,
  onShare,
  onReset,
  onSettings,
  onMenuToggle
}) => {
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-2">
      <div className="flex items-center justify-between">
        <button
          onClick={onMenuToggle}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={onRun}
            className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <Play className="w-4 h-4" />
            <span>Run</span>
          </button>
          
          <button
            onClick={onDownload}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
          
          <button
            onClick={onCopy}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
          
          <button
            onClick={onShare}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Share className="w-4 h-4" />
          </button>
          
          <button
            onClick={onReset}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          
          <button
            onClick={onSettings}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileToolbar;