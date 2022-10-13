import Footer from '../component/footer';
import Navbar from '../component/navbar';
import styles from '../styles/formpage.module.css'

export default function Formpage() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        
        
      <h2>Fill the form genuienely</h2>
      <div className={styles.wrapper}>

          <span>
          <label for="fname">Gender</label>
          <select>
            <option value="0">-- select gender --</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Others</option>
          </select>
          </span>
          
        <form className={styles.form}>
          <span>
          <label for="fname">First name</label>
          <input type="text" spellcheck="false" name="form" />
          </span>
          
          <span>
          <label for="lname">Last name</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="Email">Email address</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="sphone">Scholar’s Phone no.</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="gphone">Guardian’s Phone no.</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="department">Department</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="destination">Intended travel destination</label>
          <input type="text" spellcheck="false" name="form" />
          </span>

          <span>
          <label for="reason">Reason for request</label>
          <textarea spellcheck="true" cols="30" row="10"></textarea>
          </span>
        </form>

        <button id="submit" className={styles.submit} >Submit</button>

      </div>

      </main>

      <Footer />
    </div>
  )
}
