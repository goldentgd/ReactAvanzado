import { OllamaProvider } from "./context/Context";
import ChatBox from "./context/ChatBox";

export default function App() {
  return (
    <OllamaProvider>
      <div className="flex h-screen bg-gray-100">
        <ChatBox />
      </div>
    </OllamaProvider>
  );
}
