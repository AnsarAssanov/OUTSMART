import { Button } from "./Button";

const FORM_LINK = "https://forms.gle/qGHEJES2sDgBM92g7";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center bg-black/40">
      <div className="font-heading font-bold text-2xl tracking-tighter text-white">
        OUTSMART<span className="text-indigo-500">.</span>
      </div>
      <div>
        <Button href={FORM_LINK} variant="primary" className="!px-4 !py-2 text-xs md:text-sm">
          Подать заявку
        </Button>
      </div>
    </nav>
  );
}
