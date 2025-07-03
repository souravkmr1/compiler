import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import CodeEditor from './components/CodeEditor';
import InputOutputPanel from './components/InputOutputPanel';
import ResizablePanel from './components/ResizablePanel';
import MobileToolbar from './components/MobileToolbar';

const AppContent: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState('csharp');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simulate code execution
  const runCode = () => {
    setOutput('Compiling...\n');
    
    // Simulate compilation and execution
    setTimeout(() => {
      const sampleOutput = `Hello, World!
The answer is: 42
Sum of 1-10: 55

Success: Program executed successfully
Execution time: 0.245s
Memory usage: 15.2 MB`;
      setOutput(sampleOutput);
    }, 1000);
  };

  const downloadCode = () => {
    // Simulate download functionality
    console.log('Downloading code...');
  };

  const copyCode = () => {
    // Simulate copy functionality
    console.log('Copying code to clipboard...');
  };

  const shareCode = () => {
    // Simulate share functionality
    console.log('Sharing code...');
  };

  const resetCode = () => {
    setOutput('');
    setInput('');
  };

  const openSettings = () => {
    // Simulate settings modal
    console.log('Opening settings...');
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onRun={runCode}
        onDownload={downloadCode}
        onCopy={copyCode}
        onShare={shareCode}
        onReset={resetCode}
        onSettings={openSettings}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile: Overlay menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-64 z-50">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
          </div>
        </div>
        
        {/* Desktop: Always visible */}
        <div className="hidden md:block">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Code Editor */}
          <div className="flex-1 flex flex-col">
            <CodeEditor language={selectedLanguage} onRun={runCode} />
          </div>
          
          {/* Resizable Input/Output Panel - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <ResizablePanel
              minWidth={300}
              maxWidth={800}
              defaultWidth={480}
              className="bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full"
            >
              <InputOutputPanel
                output={output}
                onInputChange={setInput}
                onRun={runCode}
              />
            </ResizablePanel>
          </div>
        </div>
      </div>
      
      {/* Mobile: Input/Output as bottom sheet */}
      <div className="md:hidden">
        <InputOutputPanel
          output={output}
          onInputChange={setInput}
          onRun={runCode}
        />
      </div>
      
      {/* Mobile Toolbar */}
      <MobileToolbar
        onRun={runCode}
        onDownload={downloadCode}
        onCopy={copyCode}
        onShare={shareCode}
        onReset={resetCode}
        onSettings={openSettings}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;