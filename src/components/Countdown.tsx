import { createSignal } from 'solid-js';

const Countdown = (props) => {
  const [until, setUntil] = createSignal(0);
  setUntil(props.targetDate.getTime() - new Date().getTime());

  const days = () => Math.floor(until() / (1000 * 60 * 60 * 24));
  const hours = () =>
    Math.floor((until() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = () => Math.floor((until() % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = () => Math.floor((until() % (1000 * 60)) / 1000);

  setInterval(
    () => setUntil(props.targetDate.getTime() - new Date().getTime()),
    1000
  );

  return (
    <div class="pt-10 h-screen bg-gradient-to-b from-blue-50 to-sky-300 dark:from-cyan-700 dark:to-sky-900">
      <div class="text-slate-900 dark:text-white grid grid-flow-col justify-center text-center font-extralight auto-cols-max">
        <div class="flex flex-col">
          <span class="countdown font-mono text-6xl">
            <span class="px-2 font-black" style={{ '--value': days() }}></span>
          </span>
          days
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-6xl">
            <span class="px-2 font-black" style={{ '--value': hours() }}></span>
          </span>
          hours
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-6xl">
            <span
              class="px-2 font-black"
              style={{ '--value': minutes() }}
            ></span>
          </span>
          min
        </div>
        <div class="flex flex-col">
          <span class="countdown  font-mono text-6xl">
            <span
              class="px-2  font-black"
              style={{ '--value': seconds() }}
            ></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
