"use client"

import { useState, useEffect } from "react"
import { Droplet, X, Trash2, ShoppingBag } from "lucide-react"
import "./seleccionarIngredientes.css"
import PerfumeLayout from "./PerfumeLayout.jsx"

// Datos de ejemplo para los ingredientes de dama
const ingredientCategoriesDama = [
  {
    id: "top",
    name: "Notas Altas",
    description: "Las primeras notas que se perciben, frescas y volátiles",
    ingredients: [
      { id: "t1", name: "Bergamota", description: "Cítrico fresco y brillante", color: "#eab308", intensity: 3 },
      { id: "t2", name: "Limón", description: "Fresco, cítrico y energizante", color: "#fde047", intensity: 2 },
      { id: "t3", name: "Lavanda", description: "Herbáceo y relajante", color: "#c084fc", intensity: 3 },
      { id: "t4", name: "Menta", description: "Refrescante y estimulante", color: "#86efac", intensity: 4 },
      { id: "t5", name: "Naranja", description: "Dulce, cítrico y alegre", color: "#fdba74", intensity: 3 },
      { id: "t6", name: "Mandarina", description: "Cítrico dulce y juguetón", color: "#fed7aa", intensity: 2 },
    ],
  },
  {
    id: "middle",
    name: "Notas Medias",
    description: "El corazón del perfume, florales y especiadas",
    ingredients: [
      { id: "m1", name: "Rosa", description: "Floral, romántico y elegante", color: "#fda4af", intensity: 4 },
      { id: "m2", name: "Jazmín", description: "Floral intenso y sensual", color: "#f9a8d4", intensity: 5 },
      { id: "m3", name: "Ylang-Ylang", description: "Floral exótico y dulce", color: "#facc15", intensity: 4 },
      { id: "m4", name: "Geranio", description: "Floral verde y fresco", color: "#4ade80", intensity: 3 },
      { id: "m5", name: "Violeta", description: "Floral dulce y delicado", color: "#a78bfa", intensity: 3 },
      { id: "m6", name: "Fresia", description: "Floral fresco y afrutado", color: "#fcd34d", intensity: 4 },
    ],
  },
  {
    id: "base",
    name: "Notas Bajas",
    description: "La base duradera, amaderadas y ambaradas",
    ingredients: [
      { id: "b1", name: "Vainilla", description: "Dulce, cálido y reconfortante", color: "#fef3c7", intensity: 4 },
      { id: "b2", name: "Ámbar", description: "Cálido, dulce y sensual", color: "#fbbf24", intensity: 5 },
      { id: "b3", name: "Almizcle", description: "Suave, sensual y envolvente", color: "#d4d4d4", intensity: 4 },
      { id: "b4", name: "Sándalo", description: "Amaderado, cremoso y cálido", color: "#92400e", intensity: 3 },
      { id: "b5", name: "Pachulí", description: "Terroso, amaderado y profundo", color: "#8B4513", intensity: 4 },
      { id: "b6", name: "Musgo", description: "Terroso, verde y natural", color: "#65a30d", intensity: 3 },
    ],
  },
]

// Datos de ejemplo para los ingredientes de caballero
const ingredientCategoriesCaballero = [
  {
    id: "top",
    name: "Notas Altas",
    description: "Las primeras notas que se perciben, frescas y volátiles",
    ingredients: [
      { id: "t1", name: "Bergamota", description: "Cítrico fresco y brillante", color: "#eab308", intensity: 3 },
      { id: "t2", name: "Limón", description: "Fresco, cítrico y energizante", color: "#fde047", intensity: 2 },
      { id: "t3", name: "Pimienta", description: "Picante, cálido y estimulante", color: "#525252", intensity: 4 },
      { id: "t4", name: "Menta", description: "Refrescante y estimulante", color: "#86efac", intensity: 4 },
      { id: "t5", name: "Jengibre", description: "Picante, cálido y energizante", color: "#ca8a04", intensity: 3 },
      { id: "t6", name: "Cardamomo", description: "Especiado, cálido y exótico", color: "#f59e0b", intensity: 3 },
    ],
  },
  {
    id: "middle",
    name: "Notas Medias",
    description: "El corazón del perfume, florales y especiadas",
    ingredients: [
      { id: "m1", name: "Lavanda", description: "Herbáceo y relajante", color: "#c084fc", intensity: 3 },
      { id: "m2", name: "Canela", description: "Cálido, especiado y reconfortante", color: "#d97706", intensity: 4 },
      { id: "m3", name: "Nuez Moscada", description: "Especiado, cálido y terroso", color: "#a16207", intensity: 4 },
      { id: "m4", name: "Salvia", description: "Herbáceo, fresco y aromático", color: "#84cc16", intensity: 3 },
      { id: "m5", name: "Tabaco", description: "Cálido, dulce y profundo", color: "#854d0e", intensity: 5 },
      { id: "m6", name: "Cuero", description: "Cálido, seco y masculino", color: "#7c2d12", intensity: 4 },
    ],
  },
  {
    id: "base",
    name: "Notas Bajas",
    description: "La base duradera, amaderadas y ambaradas",
    ingredients: [
      { id: "b1", name: "Sándalo", description: "Amaderado, cremoso y cálido", color: "#92400e", intensity: 4 },
      { id: "b2", name: "Cedro", description: "Amaderado, seco y elegante", color: "#b45309", intensity: 3 },
      { id: "b3", name: "Vetiver", description: "Terroso, amaderado y ahumado", color: "#4d7c0f", intensity: 5 },
      { id: "b4", name: "Ámbar", description: "Cálido, dulce y sensual", color: "#fbbf24", intensity: 4 },
      { id: "b5", name: "Almizcle", description: "Suave, sensual y envolvente", color: "#d4d4d4", intensity: 3 },
      { id: "b6", name: "Pachulí", description: "Terroso, amaderado y profundo", color: "#8B4513", intensity: 5 },
    ],
  },
]

export default function PerfumeBuilder({ gender = "dama" }) {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [activeTab, setActiveTab] = useState("top")
  const [ingredientCategories, setIngredientCategories] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [perfumeName, setPerfumeName] = useState("")
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [orderStep, setOrderStep] = useState(1)

  useEffect(() => {
    // Seleccionar los ingredientes según el género
    if (gender === "caballero") {
      setIngredientCategories(ingredientCategoriesCaballero)
    } else {
      setIngredientCategories(ingredientCategoriesDama)
    }
  }, [gender])

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.some((i) => i.id === ingredient.id)) {
      setSelectedIngredients([...selectedIngredients, ingredient])
    }
  }

  const removeIngredient = (ingredientId) => {
    setSelectedIngredients(selectedIngredients.filter((i) => i.id !== ingredientId))
  }

  const clearFormula = () => {
    setSelectedIngredients([])
  }

  const downloadFormula = () => {
    const formulaText = `Mi Fórmula de Perfume ${gender === "dama" ? "Femenino" : "Masculino"}:\n\n${selectedIngredients
      .map((i) => `- ${i.name}: ${i.description}`)
      .join("\n")}`

    const blob = new Blob([formulaText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `mi-formula-perfume-${gender}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const openModal = () => {
    if (selectedIngredients.length === 0) {
      alert("Por favor selecciona al menos un ingrediente para tu perfume.")
      return
    }
    setIsModalOpen(true)
    setOrderStep(1)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setOrderStep(1)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerData({
      ...customerData,
      [name]: value,
    })
  }

  const nextStep = () => {
    if (orderStep === 1 && !perfumeName.trim()) {
      alert("Por favor asigna un nombre a tu perfume.")
      return
    }

    if (orderStep === 2) {
      if (
        !customerData.name.trim() ||
        !customerData.email.trim() ||
        !customerData.phone.trim() ||
        !customerData.address.trim()
      ) {
        alert("Por favor completa todos los campos.")
        return
      }

      // Validación básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(customerData.email)) {
        alert("Por favor ingresa un email válido.")
        return
      }
    }

    setOrderStep(orderStep + 1)
  }

  const prevStep = () => {
    setOrderStep(orderStep - 1)
  }

  const submitOrder = () => {
    // Aquí iría la lógica para enviar el pedido a un servidor
    console.log("Pedido enviado:", {
      perfumeName,
      ingredients: selectedIngredients,
      customer: customerData,
    })

    // Avanzar al paso de confirmación
    setOrderStep(4)
  }

  return (
    <PerfumeLayout>
      <div className="main-container">
        <div className={`perfume-builder ${gender === "caballero" ? "masculine" : "feminine"}`}>
          <div className="ingredients-section">
            <div className="tabs">
              <div className="tabs-list">
                {ingredientCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`tab-trigger ${activeTab === category.id ? "active" : ""}`}
                    onClick={() => setActiveTab(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {ingredientCategories.map((category) => (
                <div key={category.id} className={`tab-content ${activeTab === category.id ? "active" : ""}`}>
                  <div className="category-header">
                    <h3 className="category-title">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>

                  <div className="ingredients-grid">
                    {category.ingredients.map((ingredient) => (
                      <div
                        key={ingredient.id}
                        className={`ingredient-card ${
                          selectedIngredients.some((i) => i.id === ingredient.id) ? "selected" : ""
                        }`}
                        onClick={() => addIngredient(ingredient)}
                      >
                        <div className="ingredient-content">
                          <div className="ingredient-icon" style={{ backgroundColor: ingredient.color }}>
                            <Droplet className="droplet-icon" />
                          </div>
                          <div className="ingredient-info">
                            <h4 className="ingredient-name">{ingredient.name}</h4>
                            <p className="ingredient-description">{ingredient.description}</p>
                            <div className="intensity-meter">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className={`intensity-dot ${i < ingredient.intensity ? "active" : ""}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="formula-section">
            <div className="formula-card">
              <div className="formula-header">
                <h3 className="formula-title">Mi Fórmula</h3>
                <div className="formula-actions">
                  <button
                    className="action-button clear-button"
                    onClick={clearFormula}
                    disabled={selectedIngredients.length === 0}
                  >
                    <Trash2 className="action-icon" />
                    <span className="action-text">Limpiar</span>
                  </button>
                  <button
                    className="action-button save-button"
                    onClick={openModal}
                    disabled={selectedIngredients.length === 0}
                  >
                    <ShoppingBag className="action-icon" />
                    <span className="action-text">Comprar</span>
                  </button>
                </div>
              </div>

              {selectedIngredients.length === 0 ? (
                <div className="empty-formula">
                  <p>Selecciona ingredientes para crear tu fórmula</p>
                </div>
              ) : (
                <div className="formula-content">
                  <div className="notes-grid">
                    <div className="notes-column">
                      <h4 className="notes-title">Notas Altas</h4>
                      <div className="notes-list">
                        {selectedIngredients
                          .filter((i) => ingredientCategories[0]?.ingredients.some((ing) => ing.id === i.id))
                          .map((ingredient) => (
                            <div
                              key={ingredient.id}
                              className="ingredient-badge"
                              style={{ backgroundColor: ingredient.color }}
                            >
                              {ingredient.name}
                              <X
                                className="remove-icon"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeIngredient(ingredient.id)
                                }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="notes-column">
                      <h4 className="notes-title">Notas Medias</h4>
                      <div className="notes-list">
                        {selectedIngredients
                          .filter((i) => ingredientCategories[1]?.ingredients.some((ing) => ing.id === i.id))
                          .map((ingredient) => (
                            <div
                              key={ingredient.id}
                              className="ingredient-badge"
                              style={{ backgroundColor: ingredient.color }}
                            >
                              {ingredient.name}
                              <X
                                className="remove-icon"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeIngredient(ingredient.id)
                                }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="notes-column">
                      <h4 className="notes-title">Notas Bajas</h4>
                      <div className="notes-list">
                        {selectedIngredients
                          .filter((i) => ingredientCategories[2]?.ingredients.some((ing) => ing.id === i.id))
                          .map((ingredient) => (
                            <div
                              key={ingredient.id}
                              className="ingredient-badge"
                              style={{ backgroundColor: ingredient.color }}
                            >
                              {ingredient.name}
                              <X
                                className="remove-icon"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeIngredient(ingredient.id)
                                }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="formula-visualization">
                    <h4 className="visualization-title">Visualización de la Fórmula</h4>
                    <div className="visualization-container">
                      {selectedIngredients.length > 0 && (
                        <>
                          <div className="visualization-layer top-notes">
                            {selectedIngredients
                              .filter((i) => ingredientCategories[0]?.ingredients.some((ing) => ing.id === i.id))
                              .map((ingredient, idx) => (
                                <div
                                  key={ingredient.id}
                                  className="visualization-segment"
                                  style={{
                                    backgroundColor: ingredient.color,
                                    flexGrow: ingredient.intensity,
                                    opacity: 0.8,
                                  }}
                                />
                              ))}
                          </div>
                          <div className="visualization-layer middle-notes">
                            {selectedIngredients
                              .filter((i) => ingredientCategories[1]?.ingredients.some((ing) => ing.id === i.id))
                              .map((ingredient, idx) => (
                                <div
                                  key={ingredient.id}
                                  className="visualization-segment"
                                  style={{
                                    backgroundColor: ingredient.color,
                                    flexGrow: ingredient.intensity,
                                    opacity: 0.8,
                                  }}
                                />
                              ))}
                          </div>
                          <div className="visualization-layer base-notes">
                            {selectedIngredients
                              .filter((i) => ingredientCategories[2]?.ingredients.some((ing) => ing.id === i.id))
                              .map((ingredient, idx) => (
                                <div
                                  key={ingredient.id}
                                  className="visualization-segment"
                                  style={{
                                    backgroundColor: ingredient.color,
                                    flexGrow: ingredient.intensity,
                                    opacity: 0.8,
                                  }}
                                />
                              ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de compra */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            {orderStep === 1 && (
              <div className="modal-step">
                <h2 className="modal-title">Nombra tu Perfume</h2>
                <div className="form-group">
                  <label htmlFor="perfume-name">Nombre de tu creación:</label>
                  <input
                    type="text"
                    id="perfume-name"
                    value={perfumeName}
                    onChange={(e) => setPerfumeName(e.target.value)}
                    placeholder="Ej: Brisa de Verano"
                  />
                </div>
                <div className="modal-summary">
                  <h3>Resumen de tu fórmula:</h3>
                  <div className="summary-ingredients">
                    {ingredientCategories.map((category) => {
                      const categoryIngredients = selectedIngredients.filter((i) =>
                        category.ingredients.some((ing) => ing.id === i.id),
                      )

                      if (categoryIngredients.length === 0) return null

                      return (
                        <div key={category.id} className="summary-category">
                          <h4>{category.name}</h4>
                          <ul>
                            {categoryIngredients.map((ingredient) => (
                              <li key={ingredient.id}>
                                <span className="summary-color" style={{ backgroundColor: ingredient.color }}></span>
                                {ingredient.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="modal-button secondary" onClick={closeModal}>
                    Cancelar
                  </button>
                  <button className="modal-button primary" onClick={nextStep}>
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {orderStep === 2 && (
              <div className="modal-step">
                <h2 className="modal-title">Datos de Contacto</h2>
                <div className="form-group">
                  <label htmlFor="customer-name">Nombre completo:</label>
                  <input
                    type="text"
                    id="customer-name"
                    name="name"
                    value={customerData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customer-email">Email:</label>
                  <input
                    type="email"
                    id="customer-email"
                    name="email"
                    value={customerData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customer-phone">Teléfono:</label>
                  <input
                    type="tel"
                    id="customer-phone"
                    name="phone"
                    value={customerData.phone}
                    onChange={handleInputChange}
                    placeholder="Tu número de teléfono"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customer-address">Dirección de envío:</label>
                  <textarea
                    id="customer-address"
                    name="address"
                    value={customerData.address}
                    onChange={handleInputChange}
                    placeholder="Tu dirección completa"
                    rows="3"
                  ></textarea>
                </div>
                <div className="modal-actions">
                  <button className="modal-button secondary" onClick={prevStep}>
                    Atrás
                  </button>
                  <button className="modal-button primary" onClick={nextStep}>
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {orderStep === 3 && (
              <div className="modal-step">
                <h2 className="modal-title">Confirmar Pedido</h2>
                <div className="order-summary">
                  <div className="summary-section">
                    <h3>Perfume: {perfumeName}</h3>
                    <div className="summary-ingredients compact">
                      {ingredientCategories.map((category) => {
                        const categoryIngredients = selectedIngredients.filter((i) =>
                          category.ingredients.some((ing) => ing.id === i.id),
                        )

                        if (categoryIngredients.length === 0) return null

                        return (
                          <div key={category.id} className="summary-category">
                            <h4>{category.name}</h4>
                            <ul>
                              {categoryIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                  <span className="summary-color" style={{ backgroundColor: ingredient.color }}></span>
                                  {ingredient.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="summary-section">
                    <h3>Datos de Contacto</h3>
                    <div className="contact-info">
                      <p>
                        <strong>Nombre:</strong> {customerData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {customerData.email}
                      </p>
                      <p>
                        <strong>Teléfono:</strong> {customerData.phone}
                      </p>
                      <p>
                        <strong>Dirección:</strong> {customerData.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="modal-button secondary" onClick={prevStep}>
                    Atrás
                  </button>
                  <button className="modal-button primary" onClick={submitOrder}>
                    Terminar Compra
                  </button>
                </div>
              </div>
            )}

            {orderStep === 4 && (
              <div className="modal-step confirmation">
                <div className="confirmation-icon">✓</div>
                <h2 className="modal-title">¡Gracias por tu pedido!</h2>
                <p className="confirmation-message">
                  Tu pedido de <strong>{perfumeName}</strong> está en creación.
                </p>
                <p className="confirmation-details">
                  Te enviaremos un correo a <strong>{customerData.email}</strong> con los detalles y el seguimiento de
                  tu pedido.
                </p>
                <div className="modal-actions centered">
                  <button className="modal-button primary" onClick={closeModal}>
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </PerfumeLayout>
  )
}

