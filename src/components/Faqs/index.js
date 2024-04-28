import FaqItem from '../FaqItem'

// Write your code here.
const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-bg-container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
