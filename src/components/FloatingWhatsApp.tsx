import { CLINIC } from "../lib/clinic";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-5 z-[200] md:bottom-8 md:right-8">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
        <a
          href={CLINIC.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment with Smile Clinique on WhatsApp"
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] active:scale-95 md:h-16 md:w-16"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-white md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.004 3.2C9.002 3.2 3.3 8.9 3.3 15.9c0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.82-1.79a12.65 12.65 0 006 1.53h.01c7 0 12.7-5.7 12.7-12.7 0-3.39-1.32-6.58-3.72-8.98A12.63 12.63 0 0016.004 3.2zm0 23.2h-.01a10.52 10.52 0 01-5.36-1.47l-.38-.23-3.98 1.04 1.06-3.88-.25-.4A10.48 10.48 0 015.5 15.9c0-5.8 4.72-10.5 10.52-10.5 2.81 0 5.44 1.09 7.43 3.08a10.43 10.43 0 013.07 7.42c0 5.8-4.72 10.5-10.52 10.5zm5.76-7.87c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.87-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.14-.29-.21-.61-.37z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
