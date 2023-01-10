import ModalButton from "./UI/ModalButton";

const Modal = ({ message = "You WIN!", restart, nextLevel, levelInfo }) => {
  return (
    <>
      {levelInfo.isCompleted ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden font-sans-modal outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto">
              <div className="relative flex w-full flex-col rounded-xl bg-slate-800 text-slate-200">
                <div className="border-b border-amber-500 p-5">
                  <h3 className="text-5xl font-bold">{message}</h3>
                </div>

                <div className="flex-auto p-6">
                  <p className="my-4 text-lg">
                    You've been completed Level {levelInfo.currentId} with{" "}
                    {levelInfo.currentAmount} cards
                  </p>
                  <div className="flex w-full flex-col gap-4 pt-6">
                    <div className="flex flex-col">
                      <div className="border-b text-xl">Time</div>
                      <div className="flex justify-between text-3xl text-amber-300">
                        <div>Value</div>
                        <div>Best</div>
                      </div>
                    </div>

                    <div>
                      <div className="border-b text-xl">Attempts</div>
                      <div className="flex justify-between text-3xl text-amber-300">
                        <div>{levelInfo.score}</div>
                        <div>Best</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-amber-500 p-6">
                  <ModalButton
                    text="Cancel"
                    isDisabled={false}
                    action={() => {}}
                  />
                  <ModalButton
                    text="Restart"
                    isDisabled={false}
                    action={() => {
                      restart();
                    }}
                  />
                  <ModalButton
                    text="Next Level"
                    isDisabled={!nextLevel}
                    action={nextLevel ? nextLevel : () => {}} //ugly, need to be changed
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
