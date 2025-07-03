import React, { useState, useEffect } from 'react';
import { Play, FileText, X, Plus } from 'lucide-react';

interface CodeEditorProps {
  language: string;
  onRun: () => void;
}

interface FileTab {
  id: string;
  name: string;
  content: string;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, onRun }) => {
  const [activeFile, setActiveFile] = useState(0);
  const [files, setFiles] = useState<FileTab[]>([
    {
      id: '1',
      name: 'program.cs',
      content: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
        
        // Your code here
        int number = 42;
        Console.WriteLine($"The answer is: {number}");
        
        // Example: Simple calculation
        int sum = 0;
        for (int i = 1; i <= 10; i++)
        {
            sum += i;
        }
        Console.WriteLine($"Sum of 1-10: {sum}");
    }
}`,
      language: 'csharp'
    }
  ]);

  const [code, setCode] = useState(files[0].content);
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });

  useEffect(() => {
    setCode(files[activeFile].content);
  }, [activeFile, files]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    const updatedFiles = [...files];
    updatedFiles[activeFile].content = newCode;
    setFiles(updatedFiles);
  };

  const addNewFile = () => {
    const newFile: FileTab = {
      id: Date.now().toString(),
      name: `file${files.length + 1}.cs`,
      content: `using System;

class Program
{
    static void Main()
    {
        // Your code here
    }
}`,
      language: 'csharp'
    };
    setFiles([...files, newFile]);
    setActiveFile(files.length);
  };

  const closeFile = (index: number) => {
    if (files.length > 1) {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      if (activeFile >= index && activeFile > 0) {
        setActiveFile(activeFile - 1);
      }
    }
  };

  const lines = code.split('\n');

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-800 flex flex-col">
      {/* File Tabs */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center">
        <div className="flex-1 flex items-center overflow-x-auto">
          {files.map((file, index) => (
            <div
              key={file.id}
              className={`flex items-center space-x-2 px-4 py-2 border-r border-gray-200 dark:border-gray-700 cursor-pointer ${
                activeFile === index
                  ? 'bg-gray-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={() => setActiveFile(index)}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">{file.name}</span>
              {files.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeFile(index);
                  }}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
          <button
            onClick={addNewFile}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 px-4 py-2 border-l border-gray-200 dark:border-gray-700">
          <button
            onClick={onRun}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm transition-colors"
          >
            <Play className="w-3 h-3" />
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex">
        {/* Line Numbers */}
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm font-mono p-4 border-r border-gray-200 dark:border-gray-700">
          {lines.map((_, index) => (
            <div key={index} className="text-right pr-2 leading-6">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Code Area */}
        <div className="flex-1 relative">
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-full p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none outline-none leading-6"
            placeholder="Write your code here..."
            spellCheck={false}
            style={{ 
              fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, "Courier New", monospace',
              tabSize: 4
            }}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-4">
          <span>Line {cursorPosition.line}, Column {cursorPosition.column}</span>
          <span>UTF-8</span>
          <span>{language.toUpperCase()}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Spaces: 4</span>
          <span>Lines: {lines.length}</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;