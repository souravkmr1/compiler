import React, { useState } from 'react';
import { Terminal, FileInput, ChevronDown, ChevronUp, Play, Trash2 } from 'lucide-react';

interface InputOutputPanelProps {
  output: string;
  onInputChange: (input: string) => void;
  onRun: () => void;
}

const InputOutputPanel: React.FC<InputOutputPanelProps> = ({ output, onInputChange, onRun }) => {
  const [input, setInput] = useState('');
  const [isInputExpanded, setIsInputExpanded] = useState(true);
  const [isOutputExpanded, setIsOutputExpanded] = useState(true);

  const handleInputChange = (value: string) => {
    setInput(value);
    onInputChange(value);
  };

  const clearOutput = () => {
    // This would typically clear the output in the parent component
  };

  const formatOutput = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('Error:') || line.startsWith('Exception:')) {
        return (
          <div key={index} className="text-red-400 bg-red-900/20 px-2 py-1 rounded">
            {line}
          </div>
        );
      } else if (line.startsWith('Warning:')) {
        return (
          <div key={index} className="text-yellow-400 bg-yellow-900/20 px-2 py-1 rounded">
            {line}
          </div>
        );
      } else if (line.startsWith('Success:')) {
        return (
          <div key={index} className="text-green-400 bg-green-900/20 px-2 py-1 rounded">
            {line}
          </div>
        );
      }
      return <div key={index} className="text-gray-300">{line}</div>;
    });
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Input Section */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
          onClick={() => setIsInputExpanded(!isInputExpanded)}
        >
          <div className="flex items-center space-x-2">
            <FileInput className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Input</h3>
          </div>
          {isInputExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
        
        {isInputExpanded && (
          <div className="p-4 pt-0">
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter input for your program..."
              className="w-full h-40 p-4 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              style={{ fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, "Courier New", monospace' }}
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {input.length} characters
              </span>
              <button
                onClick={onRun}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                <Play className="w-4 h-4" />
                <span>Run</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Output Section */}
      <div className="flex-1 flex flex-col">
        <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          onClick={() => setIsOutputExpanded(!isOutputExpanded)}
        >
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Output</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearOutput();
              }}
              className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              title="Clear output"
            >
              <Trash2 className="w-4 h-4 text-gray-500" />
            </button>
            {isOutputExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
        
        {isOutputExpanded && (
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 font-mono text-sm min-h-full">
              {output ? (
                <div className="space-y-1">
                  {formatOutput(output)}
                </div>
              ) : (
                <div className="text-gray-500 dark:text-gray-400 italic">
                  Click "Run" to see output...
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Console Info */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
          <div className="flex items-center justify-between">
            <span>Console</span>
            <span className="text-green-500 font-medium">Ready</span>
          </div>
          <div className="text-xs opacity-75">
            Execution time: 0.245s
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputOutputPanel;