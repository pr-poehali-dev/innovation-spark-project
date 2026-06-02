import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function RinzoLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const marqueeRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const instigateRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
      setProgress(currentProgress)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector(".marquee-content")
        if (marqueeContent) {
          const marqueeWidth = marqueeContent.scrollWidth / 2

          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
          })
        }
      }

      gsap.from(heroRef.current?.querySelector(".hero-content"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(heroRef.current?.querySelector(".hero-image"), {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelector(".benefits-title"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-image"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-content"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelector("h2"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelectorAll(".desire-image"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-content"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-image"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-content"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-image"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(pricingRef.current?.querySelectorAll(".pricing-card"), {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current?.querySelector(".cta-box"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0E0E0E]">
          <div className="flex flex-col items-center gap-8 px-6">
            <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              RINZO
              <span className="block text-[#B59F26]">AUTO</span>
            </h1>

            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1E1E1E]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6B5C08] to-[#B59F26] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#CCCCCC]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-[#0E0E0E]">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden bg-[#6B5C08] py-4">
          <div className="marquee-content flex items-center gap-4 whitespace-nowrap">
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: RINZO10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: RINZO10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>

            {/* Duplicated set for seamless loop */}
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: RINZO10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: RINZO10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: RINZO10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-[1030px] lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(14, 14, 14, 0) 0%, #0E0E0E 100%), linear-gradient(190.21deg, rgba(14, 14, 14, 0) 48.79%, #0E0E0E 91.19%), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background-QatnDXVXAGi0F0KCe4tuAQxe2m4T4E.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:gap-14">
            <div className="hero-content flex flex-col items-center gap-5 text-center">
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
                Авточехлы Rinzo — идеальная посадка для японских авто
              </h1>
              <p className="max-w-4xl text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Премиальная экокожа PVC, точный крой под правый руль. Защита и стиль — с первого взгляда.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Button className="h-12 rounded-xl bg-white px-4 font-serif text-base text-[#0E0E0E] hover:bg-white/90 md:text-lg">
                  Заказать сейчас
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#CCCCCC] bg-transparent font-serif text-base text-white hover:bg-white/10 md:text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="hero-image relative h-[300px] w-full max-w-2xl md:h-[400px] lg:h-[583px] lg:max-w-[884px]">
              <img
                src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/de762954-51c9-40f6-ab55-cc3e586f17e0.jpg"
                alt="Авточехлы Rinzo — премиальная экокожа"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="benefits-title flex flex-col gap-6 lg:flex-1">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Качество, которое видно и чувствуется
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Rinzo — авточехлы из экокожи PVC премиум-класса, созданные специально для японских автомобилей с правым рулём. Точная подгонка, долговечный материал, безупречный вид.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">Точный крой под правый руль</h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Каждый комплект разработан под конкретные модели японских авто — идеальная посадка без подгонки.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Экокожа PVC премиум
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Мягкая на ощупь, устойчивая к износу и влаге. Выглядит как дорогой кожаный салон.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Установка за 20 минут
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Простая установка без специального инструмента. В комплекте подробная инструкция.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="about-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/494c9690-5468-4435-a7fa-89a2a13bbd59.jpg"
                alt="Интерьер японского авто с авточехлами Rinzo"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="about-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Создано для японских авто
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Японские автомобили с правым рулём имеют особую компоновку салона — стандартные чехлы просто не садятся как надо. Rinzo разработаны с учётом всех особенностей: расположение подлокотников, форма сидений, крепления подголовников. Материал экокожа PVC выдерживает сибирские морозы и летний зной, не трескается и не выгорает. Преобразите салон раз и надолго.
              </p>
              <Button className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#B59F26] font-serif text-lg text-white hover:opacity-90 md:text-xl">
                Заказать сейчас
              </Button>
            </div>
          </div>
        </section>

        {/* Desire */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8">
            <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Посмотрите, как меняется салон
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="desire-image overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/de762954-51c9-40f6-ab55-cc3e586f17e0.jpg"
                  alt="Авточехлы Rinzo — вид спереди"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="desire-image overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/494c9690-5468-4435-a7fa-89a2a13bbd59.jpg"
                  alt="Авточехлы Rinzo в салоне"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="desire-image overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/dc474d72-349e-47c8-bce5-666dae997133.jpg"
                  alt="Текстура экокожи PVC Rinzo"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instigate */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row-reverse lg:gap-12">
            <div className="instigate-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/dc474d72-349e-47c8-bce5-666dae997133.jpg"
                alt="Материал экокожи PVC Rinzo крупным планом"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="instigate-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Материал, который не подведёт
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Экокожа PVC Rinzo — это не дешёвый кожзам. Это современный материал с мягкой подложкой, который не скользит, не электризуется и легко чистится влажной тряпкой. Швы усилены, стежок равномерный — чехлы служат годами.
              </p>
              <ul className="flex flex-col gap-3 text-base text-white/80 md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-[#B59F26]">✓</span> Выдерживает от −40°C до +80°C
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B59F26]">✓</span> Устойчив к истиранию и царапинам
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B59F26]">✓</span> Не выгорает на солнце
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#B59F26]">✓</span> Гипоаллергенный состав
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why */}
        <section ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="why-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Почему выбирают Rinzo?
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Сотни владельцев японских авто уже преобразили свой салон с Rinzo. Точный крой, честное качество и удобный заказ с доставкой по всей России — вот почему нас рекомендуют друзьям.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 rounded-2xl border border-white/10 p-4">
                  <span className="font-serif text-3xl font-bold text-[#B59F26]">500+</span>
                  <span className="text-sm text-white/60">довольных клиентов</span>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-white/10 p-4">
                  <span className="font-serif text-3xl font-bold text-[#B59F26]">50+</span>
                  <span className="text-sm text-white/60">моделей японских авто</span>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-white/10 p-4">
                  <span className="font-serif text-3xl font-bold text-[#B59F26]">2 года</span>
                  <span className="text-sm text-white/60">гарантия на материал</span>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl border border-white/10 p-4">
                  <span className="font-serif text-3xl font-bold text-[#B59F26]">1–3 дня</span>
                  <span className="text-sm text-white/60">доставка по России</span>
                </div>
              </div>
            </div>
            <div className="why-image w-full lg:flex-1">
              <img
                src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/494c9690-5468-4435-a7fa-89a2a13bbd59.jpg"
                alt="Rinzo авточехлы в японском авто"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Card 1 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#1a1a1a]">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/de762954-51c9-40f6-ab55-cc3e586f17e0.jpg"
                  alt="Авточехлы Rinzo Базовый"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Rinzo Базовый
                </h3>
                <p className="text-sm text-white/55 md:text-base">Передние + задние сиденья</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">4 990 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 3 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                ЗАКАЗАТЬ
              </Button>
            </Card>

            {/* Card 2 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#1a1a1a]">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/494c9690-5468-4435-a7fa-89a2a13bbd59.jpg"
                  alt="Авточехлы Rinzo Комплект"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Rinzo Комплект
                </h3>
                <p className="text-sm text-white/55 md:text-base">Весь салон + подголовники</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">7 490 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 4 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                ЗАКАЗАТЬ
              </Button>
            </Card>

            {/* Card 3 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#1a1a1a]">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/dc474d72-349e-47c8-bce5-666dae997133.jpg"
                  alt="Авточехлы Rinzo Премиум"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Rinzo Премиум
                </h3>
                <p className="text-sm text-white/55 md:text-base">Весь салон + перфорация</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">9 990 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 6 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                ЗАКАЗАТЬ
              </Button>
            </Card>

            {/* Card 4 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#1a1a1a]">
                <img
                  src="https://cdn.poehali.dev/projects/07605dfe-074b-4902-85e6-514c9d9e839f/files/de762954-51c9-40f6-ab55-cc3e586f17e0.jpg"
                  alt="Авточехлы Rinzo под заказ"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Rinzo Индивидуальный
                </h3>
                <p className="text-sm text-white/55 md:text-base">Пошив под вашу модель</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">от 12 000 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 6 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                ЗАКАЗАТЬ
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#B59F26] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Узнайте, подходят ли чехлы Rinzo для вашей модели — свяжитесь с нами!
              </p>
              <Button className="h-12 w-full rounded-xl bg-[#0E0E0E] text-base text-white hover:bg-[#0E0E0E]/90 md:w-auto md:px-8 md:text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#333333] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
              RINZO <span className="text-[#B59F26]">AUTO</span>
            </h2>
            <p className="text-center text-sm leading-relaxed tracking-tight text-white/55 md:text-base">
              2025 - Rinzo. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
