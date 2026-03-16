const text = '> creative.exe is loading...';
const el = document.querySelector('.text-content');

const TYPE_SPEED   = 80;
const DELETE_SPEED = 45;
const PAUSE_FULL   = 5000;
const PAUSE_EMPTY  = 600;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const typer = async () => {
  while (true) {
    for (let i = 0; i <= text.length; i++) {
      el.textContent = text.slice(0, i);
      await sleep(TYPE_SPEED);
    }

    await sleep(PAUSE_FULL);

    for (let i = text.length; i >= 0; i--) {
      el.textContent = text.slice(0, i);
      await sleep(DELETE_SPEED);
    }

    await sleep(PAUSE_EMPTY);
  }
};

const init = () => {
  typer();
};

init();
