import React from 'react';
import './styles.css';

interface DynamicSvgProps {
  url?: string;
  svgFile?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const DynamicSvg: React.FC<DynamicSvgProps> = ({ url, svgFile: SvgFile }) => {
  const [fetchedSvgContent, setFetchedSvgContent] = React.useState<string | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    const fetchSvg = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text();
        setFetchedSvgContent(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSvg();
  }, [url]);

  if ((isLoading && url) || error) {
    return null;
  }

  return (
    <div
      style={{display: "inlineBlock"}}
    >
      {SvgFile ? <SvgFile /> : <div dangerouslySetInnerHTML={{ __html: fetchedSvgContent || '' }} />}
    </div>
  );
};

export default DynamicSvg;
