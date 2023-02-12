import { useState } from "react";
import representTime from "../utils/representTime";
import ModalButton from "./UI/ModalButton";

const Modal = ({
  changeLevel,
  attempts,
  currentLevel,
  best,
  time,
  isLastLevel,
  restartLevel,
}) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto overflow-x-hidden font-sans-modal outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto">
              <div className="relative flex w-full flex-col rounded-xl bg-slate-800 text-slate-200">
                <div className="border-b border-amber-500 p-5">
                  <h3 className="text-5xl font-bold">You Win!</h3>
                </div>

                <div className="flex-auto p-6">
                  <p className="my-4 text-lg">
                    You've been completed Level {currentLevel.id} with{" "}
                    {currentLevel.amount} cards
                  </p>
                  <div className="flex w-full flex-col gap-4 pt-6">
                    <div className="flex flex-col">
                      <div className="border-b text-xl">Time</div>
                      <div className="flex justify-between text-3xl text-amber-300">
                        <div>{representTime(time)}</div>
                        <div>{representTime(time)}</div>
                      </div>
                    </div>

                    <div>
                      <div className="border-b text-xl">Attempts</div>
                      <div className="flex justify-between text-3xl text-amber-300">
                        <div>{attempts}</div>
                        <div>{attempts}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-amber-500 p-6">
                  <ModalButton
                    isDisabled={false}
                    action={() => setShowModal(false)}
                  >
                    Cancel
                  </ModalButton>
                  <ModalButton
                    isDisabled={false}
                    action={() => {
                      restartLevel();
                    }}
                  >
                    Restart
                  </ModalButton>
                  <ModalButton
                    isDisabled={isLastLevel}
                    action={() => changeLevel(currentLevel.id + 1)}
                  >
                    Next Level
                  </ModalButton>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-30 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
