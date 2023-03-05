import { options } from "./data/options";
import { useChoices } from "./hooks/useChoices";
function Game() {
  const {
    userChoice,
    userMessage,
    computerChoice,
    computerMessage,
    result,
    disabled,
    handleSelect,
    reset,
  } = useChoices();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡Juguemos!</h1>
        <div className="max-w-md mx-auto">
          {options &&
            options.map((option) => (
              <button
                className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                key={option.id}
                title={option.name}
                disabled={disabled}
                onClick={() => handleSelect(option.id)}
              >
                {option.emoji}
              </button>
            ))}
          {userMessage && <p className="text-xl mt-4">{userMessage}</p>}
          {computerMessage && <p className="text-xl mt-4">{computerMessage}</p>}
          {result !== null && (
            <div className="mt-8">
              {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
              {result === 1 && (
                <p className="text-xl mt-4">
                  ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
              {result === 2 && (
                <p className="text-xl mt-4">
                  ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                  {options[computerChoice]?.name}
                </p>
              )}
            </div>
          )}
          {result !== null && (
            <div className="flex items-center justify-center">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700 justify-center"
                onClick={reset}
              >
                Jugar de nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;
