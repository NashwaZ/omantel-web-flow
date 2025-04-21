
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = 'json', title }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      toast.success("Code copied to clipboard");
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="bg-omantel-darkBlue rounded-lg overflow-hidden my-4">
      {title && (
        <div className="bg-omantel-blue bg-opacity-90 text-white px-4 py-2 flex justify-between items-center">
          <span className="font-medium">{title}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={copyToClipboard}
            className="text-white hover:bg-omantel-blue hover:bg-opacity-70"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
