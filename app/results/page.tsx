"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, CheckCircle, Star, Lock, ShieldCheck, Clock, Target } from "lucide-react"

export default function ResultsPage() {
  const [imageProgress, setImageProgress] = useState(50)

  // ✅ Función para preservar UTMs en la navegación hacia checkout
  const navigateToCheckoutWithUTMs = (checkoutUrl: string) => {
    if (typeof window === "undefined") return

    const currentParams = new URLSearchParams(window.location.search)
    const utmParams = new URLSearchParams()
    
    // Preservar todos los parámetros UTM y otros parámetros de tracking
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gclid', 'fbclid', 'msclkid', 'ttclid',
      'ref', 'referrer', 'source', 'aid', 'cid', 'sid',
    ]
    
    trackingParams.forEach(param => {
      const value = currentParams.get(param)
      if (value) {
        utmParams.set(param, value)
      }
    })
    
    // Construir URL final del checkout con UTMs
    const finalCheckoutUrl = utmParams.toString() 
      ? `${checkoutUrl}?${utmParams.toString()}`
      : checkoutUrl
    
    // Navegar al checkout externo
    window.location.href = finalCheckoutUrl
  }

  // ✅ USEEFFECT OPTIMIZADO - ViewContent cuando carga
  useEffect(() => {
    console.log("📄 Página de resultados cargada");

    // 🎯 TRACKING UNIFICADO - ViewContent con retry inteligente
    const trackResultsPageView = (attempt = 1) => {
      console.log(`🔄 Intento ${attempt} de tracking ViewContent...`);
      
      if (typeof window !== "undefined" && window.trackEvent) {
        window.trackEvent('ViewContent', {
          content_name: 'Results Page - Plan A Seca Ayuno',
          content_category: 'results_page',
          value: 19.90,
          currency: 'BRL',
          content_ids: ['results-plan-a'],
          page_title: 'Resultados del Quiz'
        });
        console.log("✅ Results Page - ViewContent disparado con éxito!");
        return true; // Éxito
      } else {
        console.log(`⏳ Intento ${attempt} - Scripts aún cargando...`);
        
        // Verificar individualmente cada script
        console.log("UTMify disponible:", !!window.utmify);
        console.log("trackEvent disponible:", !!window.trackEvent);
        console.log("GA disponible:", !!window.gtag);
        
        // Intentar nuevamente si no pasó de 10 intentos
        if (attempt < 10) {
          setTimeout(() => trackResultsPageView(attempt + 1), 1000);
        } else {
          console.error("❌ Falla después de 10 intentos - scripts no cargaron");
        }
        return false;
      }
    };

    // Comenzar intentos inmediatamente
    trackResultsPageView(1);
    
    // Backup: intentar nuevamente después de 3 segundos
    setTimeout(() => {
      if (typeof window !== "undefined" && window.trackEvent) {
        console.log("🔄 Backup tracking después de 3s...");
        window.trackEvent('ViewContent', {
          content_name: 'Results Page Backup',
          content_category: 'results_page_backup',
          value: 19.90,
          currency: 'BRL'
        });
      }
    }, 3000);

  }, [])

// ✅ FUNCIÓN CORREGIDA - InitiateCheckout con parámetros correctos para Facebook
const handleReceivePlan = () => {
  console.log("🛒 Botón clickeado - Preparando InitiateCheckout...");

  // 🎯 TRACKING UNIFICADO - InitiateCheckout con parámetros Facebook/Meta
  const trackCheckout = (attempt = 1) => {
    console.log(`�� Intento ${attempt} de InitiateCheckout...`);
    
    if (typeof window !== "undefined" && window.trackEvent) {
      // Parámetros optimizados para Facebook/Meta Ads
      const checkoutData = {
        content_name: 'Plan A - Seca Ayuno',
        content_category: 'digital_product',
        content_type: 'product',
        content_ids: ['plan-a-seca-ayuno'],
        contents: [{
          id: 'plan-a-seca-ayuno',
          quantity: 1,
          item_price: 19.90
        }],
        value: 19.90,
        currency: 'BRL',
        num_items: 1,
        // Parámetros adicionales para Facebook
        predicted_ltv: 19.90,
        event_source_url: window.location.href,
        opt_out: false
      };

      window.trackEvent('InitiateCheckout', checkoutData);
      console.log("✅ InitiateCheckout disparado con parámetros Facebook:", checkoutData);
      
      // TAMBIÉN disparar como Purchase para garantizar
      setTimeout(() => {
        if (window.trackEvent) {
          window.trackEvent('Purchase', {
            content_name: 'Plan A - Seca Ayuno',
            content_category: 'digital_product',
            content_type: 'product',
            content_ids: ['plan-a-seca-ayuno'],
            value: 19.90,
            currency: 'BRL',
            transaction_id: 'quiz_' + Date.now(),
            event_source_url: window.location.href
          });
          console.log("✅ Purchase BACKUP también disparado");
        }
      }, 1000);
      
      return true;
    } else {
      console.log(`⏳ Intento ${attempt} - trackEvent no disponible`);
      
      // Verificar scripts individualmente
      console.log("UTMify:", !!window.utmify);
      console.log("trackEvent:", !!window.trackEvent);
      
      if (attempt < 3) {
        setTimeout(() => trackCheckout(attempt + 1), 500);
      } else {
        console.log("⚠️ Procediendo sin tracking después de 3 intentos");
      }
      return false;
    }
  };

  // Intentar tracking
  trackCheckout(1);

  // ✅ REDIRECCIÓN (independiente del tracking)
  console.log("⏳ Esperando 3s para redirección (tiempo extra para tracking)...");
  setTimeout(() => {
    console.log("🚀 Redirigiendo a checkout...");
    navigateToCheckoutWithUTMs("https://pay.cakto.com.br/37iud5r_506380");
  }, 3000); // Aumenté a 3 segundos
}

  return (
    <div className="min-h-screen bg-white">
      {/* Header Mobile First */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg">
        <div className="w-full max-w-md mx-auto px-3 py-3 flex items-center justify-center">
          <Flame className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
          <span className="text-lg font-bold text-white">Plan A - Seca Ayuno</span>
          <div className="ml-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-xs font-bold">
            PERSONALIZADO
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mx-auto px-3 py-4">
        {/* Título Principal Mobile */}
        <div className="text-center mb-6">
          <div className="bg-red-500 text-white px-3 py-2 rounded-full inline-block mb-3 text-xs font-bold">
            🔥 PROTOCOLO EXCLUSIVO CREADO PARA TI
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
            ¡Tu <span className="text-green-600 bg-green-50 px-1 py-1 rounded">protocolo científico</span> está listo!
            <br />
            <span className="text-red-600">Pierde hasta 8kg en solo</span>
            <br />
            <div className="flex items-center justify-center mt-2">
              <Clock className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-2xl font-black text-red-600">28 DÍAS</span>
            </div>
          </h1>
          <p className="text-gray-600 text-xs">
            ⚡ Basado en tus respuestas + investigaciones de Harvard y Stanford
          </p>
        </div>

        {/* Before & After Mobile Optimizado */}
        <div className="relative w-full h-72 mb-6 rounded-xl overflow-hidden shadow-2xl border-4 border-green-400">
          {/* Imagen ANTES (base) */}
          <div className="absolute inset-0">
            <img
              src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/a-photograph-of-a-confident-slender-woma_6pH4Bhx2SOKjY1q47cLqJQ_Bu33yAxDSs67Z6oKXZAotA-1.jpeg"
              alt="Antes del Plan A"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Imagen DESPUÉS (superpuesta con clip-path) */}
          <div 
            className="absolute inset-0 transition-all duration-300 ease-out"
            style={{ 
              clipPath: `inset(0 ${100 - imageProgress}% 0 0)`,
            }}
          >
            <img
              src="https://nutricaoalimentos.shop/wp-content/uploads/2025/08/a-photograph-of-a-confident-woman-with-w_HJcLKNlRSKKHFm3MIswJ7Q_Bu33yAxDSs67Z6oKXZAotA-1.jpeg"
              alt="Después del Plan A"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Línea divisoria */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-300"
            style={{ left: `${imageProgress}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Slider Mobile */}
          <input
            type="range"
            min="0"
            max="100"
            value={imageProgress}
            onChange={(e) => setImageProgress(Number(e.target.value))}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-white bg-opacity-80 rounded-full appearance-none cursor-pointer shadow-lg slider"
            style={{
              background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${imageProgress}%, #22c55e ${imageProgress}%, #22c55e 100%)`
            }}
          />

          {/* Labels ANTES/DESPUÉS Mobile */}
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-center text-xs font-bold shadow-lg">
            <p className="mb-1">ANTES</p>
            <p className="text-xs opacity-90">Metabolismo lento</p>
          </div>
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-center text-xs font-bold shadow-lg">
            <p className="mb-1">DESPUÉS</p>
            <p className="text-xs opacity-90">28 días</p>
          </div>

          {/* Indicadores inferiores Mobile */}
          <div className="absolute bottom-10 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
            <Target className="w-3 h-3 mr-1 text-red-400" />
            <span>Grasa localizada</span>
          </div>
          <div className="absolute bottom-10 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
            <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
            <span>Cintura definida</span>
          </div>
        </div>

        {/* CSS para el slider personalizado Mobile */}
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #22c55e;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          }
          
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid #22c55e;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          }
        `}</style>

        {/* ✅ Oferta Principal Mobile - CON INITIATE CHECKOUT OPTIMIZADO */}
        <Card className="mb-5 border-4 border-green-400 shadow-2xl bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-4 text-center">
            <div className="bg-red-500 text-white px-3 py-2 rounded-full inline-block mb-3 text-xs font-bold animate-pulse">
              🚨 ÚLTIMOS CUPOS HOY
            </div>
            <p className="text-lg font-bold text-gray-800 mb-3">
              ¡Tu <span className="text-green-600">Plan A - Seca Ayuno</span> personalizado está listo!
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 mb-3">
              <p className="text-xs text-gray-700 mb-2">💰 <strong>Inversión normal:</strong> <span className="line-through">$ 67</span></p>
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-base font-bold text-gray-800">Hoy solo</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm text-gray-500">4x de</span>
                <span className="text-2xl font-black text-green-600 ml-1"> $14</span>
              </div>
              <p className="text-xs text-green-700 font-semibold">
                ✅ (79% de descuento)
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-2 rounded-xl font-bold text-sm shadow-xl transform hover:scale-105 transition-all duration-200 leading-tight"
              onClick={handleReceivePlan}
            >
              🔥 ¡QUIERO MI PLAN AHORA!
            </Button>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs text-gray-600">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Compra SEGURA</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Garantía 30 DÍAS</span>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Datos PROTEGIDOS</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cómo Funciona Mobile */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            🎯 ¿Qué vas a recibir en el <span className="text-green-600">Plan A</span>?
          </h2>
          <p className="text-gray-600 text-xs mb-4 text-center bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
            <strong>📚 Protocolo científico basado en Harvard + Stanford</strong><br />
            Desarrollado específicamente para tus objetivos y estilo de vida. 
            Resultados comprobados en <strong>28 días</strong> sin efecto rebote.
          </p>
          
          <div className="space-y-3">
            <Card className="p-3 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500">
              <p className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                Protocolo Seca Ayuno Personalizado:
              </p>
              <p className="text-xs text-gray-700 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-500" />
                Horarios exactos de ayuno basados en tu rutina + alimentos que aceleran la quema de grasa. 
                <strong>Pierde hasta 8kg en 28 días</strong> sin pasar hambre o perder músculos.
              </p>
            </Card>

            <Card className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
              <p className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                Turbo Metabólico 24h:
              </p>
              <p className="text-xs text-gray-700 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-500" />
                Estrategias para acelerar tu metabolismo hasta un 40% y quemar grasa incluso durmiendo. 
                <strong>¡Energía de joven a los 20 años!</strong>
              </p>
            </Card>

            <Card className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500">
              <p className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                Transformación Espejo en 7 Días:
              </p>
              <p className="text-xs text-gray-700 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-500" />
                Método exclusivo para desinflamar rápidamente y ver resultados en el espejo en menos de 1 semana. 
                <strong>¡Prepárate para los elogios!</strong>
              </p>
            </Card>

            <Card className="p-3 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500">
              <p className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">4</span>
                Blindaje Anti-Efecto Rebote:
              </p>
              <p className="text-xs text-gray-700 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-500" />
                El secreto para mantener el peso perdido para siempre. <strong>Nunca más vuelvas a engordar</strong> 
                incluso después de alcanzar tu objetivo.
              </p>
            </Card>

            <Card className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500">
              <p className="font-bold text-gray-800 mb-2 flex items-center text-sm">
                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">5</span>
                Kit Motivación Inquebrantable:
              </p>
              <p className="text-xs text-gray-700 flex items-start">
                <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-500" />
                Metas diarias + protocolo anti-procrastinación + planilla de seguimiento. 
                <strong>¡Mantente motivada todos los días!</strong>
              </p>
            </Card>
          </div>
        </div>

        {/* Testimonios Mobile */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-3 text-center">
            💬 Lo que nuestras alumnas están diciendo sobre el <span className="text-green-600">Plan A</span>
          </h2>
          <div className="space-y-3">
            {[
              {
                name: "Marina Silva",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/01.png",
                rating: 5,
                title: "¡8kg en 28 días! ¡No lo puedo creer! 😱",
                text: "¡Chicas, estoy en shock! Seguí el Plan A al pie de la letra y en exactos 28 días perdí 8kg. Lo mejor es que no pasé hambre ni una sola vez. El protocolo de ayuno es muy inteligente, se adapta perfectamente a mi rutina de mamá. ¡Ya compré ropa talla M! 🥰",
                days: "hace 2 días"
              },
              {
                name: "Carla Mendes",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/02.png",
                rating: 5,
                title: "¡Mi esposo no para de elogiarme! ❤️",
                text: "Después de 3 hijos pensé que nunca más iba a tener el cuerpo que quería. ¡El Plan A me demostró lo contrario! En 3 semanas ya eliminé 6kg y la barriga que tanto me molestaba. ¡Mi esposo no para de decir que estoy hermosa! ¡La autoestima por las nubes! 🔥",
                days: "hace 5 días"
              },
              {
                name: "Juliana Costa",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/8db332e349f045c0e1949cb88c6096d4.jpg",
                rating: 5,
                title: "¡Energía de adolescente a los 45 años! ⚡",
                text: "Lo que más me impresionó no fue solo la pérdida de peso (5kg hasta ahora), sino la ENERGÍA. Despierto con ganas, no tengo más esa somnolencia de la tarde. ¡Parece que volví a los 20 años! El protocolo metabólico es increíble. ¡Vale cada centavo! ��",
                days: "hace 1 semana"
              },
              {
                name: "Fernanda Oliveira",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/3-DEPOIMENTO.png",
                rating: 5,
                title: "¡Me desinflamé en 7 días como prometieron! 🎯",
                text: "Era escéptica, pero decidí probar. ¡En 7 días exactos ya veía diferencia en el espejo! La hinchazón desapareció completamente. Ahora con 20 días ya son 4kg menos y muchos elogios. El plan está muy bien estructurado, fácil de seguir. ¡Lo recomiendo! ✨",
                days: "hace 3 días"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-3 shadow-lg border-l-4 border-green-400 bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center mb-2">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-green-400 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-800 text-sm truncate">{testimonial.name}</h4>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{testimonial.days}</span>
                    </div>
                    <div className="flex text-yellow-400 text-xs mb-1">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <p className="text-xs font-semibold text-green-700 mb-1">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Imagen de Resultados Mobile */}
        <div className="mb-6 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            📸 Resultados reales en <span className="text-red-600">28 días</span>
          </h2>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl">
            <img
              src="https://nutricaoalimentos.shop/wp-content/uploads/2025/07/a-split-screen-photograph-showcasing-a-t_5pDfAYkqSfCrofLJyy2sjw_fApRb1upRymgCH44qbW3EQ.jpeg"
              alt="Transformaciones reales del Plan A"
              className="w-full rounded-lg shadow-xl object-cover border-4 border-white"
            />
            <p className="text-xs text-gray-600 mt-2 font-medium">
              ⚡ Más de 15.000 mujeres ya transformaron sus cuerpos
            </p>
          </div>
        </div>

        {/* ✅ Segunda Oferta Mobile - CON INITIATE CHECKOUT OPTIMIZADO */}
        <Card className="mb-5 border-4 border-red-400 shadow-2xl bg-gradient-to-br from-red-50 to-yellow-50">
          <CardContent className="p-4 text-center">
            <div className="bg-red-500 text-white px-3 py-2 rounded-full inline-block mb-3 text-xs font-bold animate-bounce">
              ⏰ ¡OFERTA EXPIRA PRONTO!
            </div>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-center mb-2 flex-wrap">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-base font-bold text-gray-800">Últimos cupos</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-sm text-gray-500">4x de solo</span>
                <span className="text-2xl font-black text-green-600 ml-1">$14</span>
              </div>
              <p className="text-xs text-green-700 font-semibold">
                💳 (descuento del 79%)
              </p>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-2 rounded-xl font-bold text-sm shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse leading-tight"
              onClick={handleReceivePlan}
            >
              🚨 ¡ASEGURAR MI CUPO AHORA!
            </Button>
            <div className="grid grid-cols-3 gap-2 mt-3 text-xs text-gray-600">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Compra SEGURA</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Garantía 30 DÍAS</span>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="w-4 h-4 mb-1 text-green-500" />
                <span className="text-center">Datos PROTEGIDOS</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Garantía Mobile */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 mb-6 shadow-lg border-2 border-blue-200 text-center">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-lg font-bold">
            30
            <span className="text-xs ml-1">DÍAS</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            🛡️ Garantía Blindada de Resultados
          </h3>
          <p className="text-gray-700 text-xs mb-3 leading-relaxed">
            <strong>Prueba el Plan A por 30 días completos.</strong> Si no pierdes al menos 4kg 
            o no quedas 100% satisfecha con los resultados, te devolvemos todo tu dinero. 
            <strong>Sin preguntas, sin burocracia.</strong>
          </p>
          <p className="text-blue-600 text-xs font-semibold">
            📧 Soporte: <a href="mailto:secaplanoa@gmail.com" className="underline break-all">
              secaplanoa@gmail.com
            </a>
          </p>
        </div>

        {/* Testimonios Adicionales Mobile */}
        <div className="mb-6">
          <div className="space-y-3">
            {[
              {
                name: "Patricia Alves",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/1-DEPOIMENTO.png",
                rating: 5,
                text: "¡Increíble! 6kg en 3 semanas y sin esa hambre desesperante que sentía en otras dietas. ¡El protocolo es muy inteligente! 🤩",
                days: "hace 4 días"
              },
              {
                name: "Roberta Lima",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/2fc1e47b2931f00666611ff2960c9c3f.jpg",
                rating: 5,
                text: "¡Chicas, funciona de verdad! Ya eliminé 7kg y lo mejor: no volví a ganar peso. ¡El anti-efecto rebote es real! 💪",
                days: "hace 1 semana"
              },
              {
                name: "Camila Santos",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/2-DEPOIMENTO.png",
                rating: 5,
                text: "¡Compré ayer y ya empecé hoy! Las orientaciones son súper claras y fáciles de seguir. ¡Ansiosa por los resultados! 🔥",
                days: "hace 1 día"
              },
              {
                name: "Luciana Ferreira",
                avatar: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/4-DEPOIMENTO.png",
                rating: 5,
                text: "¡La mejor inversión que he hecho! $14 que cambiaron mi vida. 5kg menos y mucha más disposición! ⚡",
                days: "hace 6 días"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-3 shadow-md border-l-4 border-blue-400 bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center mb-2">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full mr-2 object-cover border-2 border-blue-400 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800 text-xs truncate">{testimonial.name}</h4>
                      <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{testimonial.days}</span>
                    </div>
                    <div className="flex text-yellow-400 text-xs">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-700">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* ✅ CTA Final Mobile - CON INITIATE CHECKOUT OPTIMIZADO */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 text-center text-white mb-4">
          <h3 className="text-lg font-bold mb-2">🎯 ¡Tu transformación comienza HOY!</h3>
          <p className="text-xs mb-3 opacity-90">
            Únete a las más de 15.000 mujeres que ya transformaron sus cuerpos con el Plan A
          </p>
          <div className="w-full">
            <Button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800 py-3 px-2 rounded-xl font-bold text-sm shadow-xl transform hover:scale-105 transition-all duration-200 leading-tight break-words"
              onClick={handleReceivePlan}
            >
              🔥 ¡COMENZAR MI TRANSFORMACIÓN AHORA!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
