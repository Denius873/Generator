import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
// Viber SVG icon component
function ViberIcon({ className }: {className?: string;}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.398 0.002C10.196 0.037 7.032 0.296 4.356 2.648C2.156 4.648 1.326 7.462 1.242 10.942C1.158 14.422 1.074 21.052 7.478 22.802L7.48 22.802L7.478 25.398C7.478 25.398 7.438 26.278 8.018 26.458C8.718 26.678 9.128 25.998 9.788 25.278C10.148 24.878 10.648 24.298 11.018 23.868C15.198 24.218 18.398 23.398 18.758 23.278C19.598 22.998 24.058 22.418 24.738 16.518C25.438 10.418 24.418 6.398 22.198 4.298L22.198 4.298C21.618 3.538 18.598 0.638 12.438 0.038C12.438 0.038 11.938 -0.012 11.398 0.002ZM11.558 1.918C12.018 1.908 12.418 1.948C17.718 2.458 20.318 4.848 20.818 5.478C22.718 7.238 23.458 10.798 22.858 15.998C22.278 20.998 18.638 21.298 17.918 21.538C17.618 21.638 14.818 22.338 11.318 22.078 8.638 25.278 7.838 26.078C7.718 26.198 7.578 26.248 7.488 26.228C7.358 26.198 7.318 26.038 7.328 25.818C7.328 25.498 7.348 22.058 7.348 22.058C1.818 20.578 2.138 14.778 2.208 11.778C2.278 8.778 2.958 6.338 4.858 4.578C7.178 2.558 9.918 1.978 11.558 1.918Z" />
      <path d="M12.268 5.018C12.038 5.018 12.038 5.378 12.268 5.398C15.768 5.558 18.438 7.798 18.688 11.898C18.698 12.128 19.058 12.118 19.048 11.888C18.778 7.538 15.938 5.178 12.268 5.018Z" />
      <path d="M16.448 11.138C16.428 11.368 16.788 11.398 16.808 11.168C17.058 8.878 15.698 7.098 13.248 6.638C13.018 6.598 12.958 6.958 13.188 6.998C15.398 7.418 16.678 9.018 16.448 11.138Z" />
      <path d="M15.738 13.218C15.338 12.978 14.928 12.748 14.498 12.978C14.168 13.158 13.948 13.578 13.688 13.858C13.538 14.028 13.358 14.058 13.148 13.968C11.648 13.338 10.498 12.318 9.668 10.918C9.518 10.678 9.548 10.478 9.748 10.268C9.928 10.078 10.138 9.858 10.188 9.598C10.238 9.338 10.108 9.038 9.978 8.808C9.798 8.478 9.578 7.878 9.248 7.648C8.928 7.428 8.528 7.518 8.248 7.758C7.598 8.328 7.238 9.028 7.278 9.918C7.298 10.278 7.398 10.628 7.548 10.958C7.838 11.658 8.268 12.298 8.738 12.898C9.708 14.138 10.898 15.138 12.318 15.838C12.918 16.128 13.538 16.398 14.208 16.458C15.018 16.528 15.728 16.278 16.198 15.578C16.438 15.218 16.738 14.728 16.548 14.298C16.378 13.898 15.918 13.598 15.558 13.358Z" />
      <path d="M14.248 8.298C14.028 8.258 13.968 8.618 14.188 8.658C15.148 8.838 15.648 9.378 15.748 10.378C15.768 10.608 16.128 10.578 16.108 10.348C15.988 9.178 15.378 8.498 14.248 8.298Z" />
    </svg>);

}
export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію по
            телефону.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Контактна інформація
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Телефон
                  </p>
                  <a
                    href="tel:+380979392100"
                    className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors">

                    +38 097 939 21 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Електронна пошта
                  </p>
                  <a
                    href="mailto:Servisewater1981@gmail.com"
                    className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors break-all">

                    Servisewater1981@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Адреса
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    вулиця Одеська 58/1
                  </p>
                  <p className="text-gray-500">Одеса, Україна</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Графік роботи
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    Пн-Пт: 9:00 - 21:00
                  </p>
                  <p className="text-gray-500">Субота і Неділя - вихідні</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="flex flex-col gap-4">

            <a
              href="https://t.me/Ambrella2021"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#0088cc] text-white rounded-2xl hover:opacity-90 transition-opacity shadow-md group">

              <div className="flex items-center gap-4">
                <Send className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-bold text-xl">Telegram</p>
                  <p className="text-white/80 text-sm">Написати повідомлення</p>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>

            <a
              href="viber://add?number=380636473005"
              className="flex items-center justify-between p-6 bg-[#7360F2] text-white rounded-2xl hover:opacity-90 transition-opacity shadow-md group">

              <div className="flex items-center gap-4">
                <ViberIcon className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-bold text-xl">Viber</p>
                  <p className="text-white/80 text-sm">Зателефонувати</p>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/generator_servise_odessa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-2xl hover:opacity-90 transition-opacity shadow-md group">

              <div className="flex items-center gap-4">
                <Instagram className="h-8 w-8" />
                <div className="text-left">
                  <p className="font-bold text-xl">Instagram</p>
                  <p className="text-white/80 text-sm">Підписатися</p>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}
function ArrowRight({ className }: {className?: string;}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>

      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>);

}