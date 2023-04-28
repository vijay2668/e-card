import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const provideIcon = (info) => {
  if (info?.includes("mail")) {
    return <IoIosMail className="w-8 h-8" />;
  } else if (info?.includes("twitter")) {
    return <FaTwitter className="w-8 h-8" />;
  } else if (info?.includes("github")) {
    return <FaGithub className="w-8 h-8" />;
  } else if (info?.includes("youtube")) {
    return <FaYoutube className="w-8 h-8" />;
  } else {
    return <FaLinkedinIn className="w-8 h-8" />;
  }
};

const provideURL = (social, value) => {
  if (social === "Email") {
    return `mailto:${value}`;
  } else {
    return value;
  }
};

function extractDomainName(url) {
  let domainName = url.replace("https://", "");
  domainName = domainName.replace("http://", ""); // Add this line if you want to remove 'http://' as well
  domainName = domainName.replace("www.", ""); // Add this line if you want to remove 'www.' as well
  domainName = domainName.replace(".com", "");
  return domainName;
}

function getFavicon(url) {
  const domain = new URL(url).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
  return faviconUrl;
}

function formatNumber(num) {
  if(num){
    if(num > 999){
      const abbreviations = {
        k: 1000,
        m: 1000000,
        b: 1000000000,
        t: 1000000000000
      };
    
      for (let key in abbreviations) {
        if (num >= abbreviations[key]) {
          return (num / abbreviations[key]).toFixed(1) + key;
        }
      }
    
      return num.toString();
    } else {
      return num
    }
  } else {
    return 0
  }
}

const handleOnBlur = (e, index, userUid, result, handleReload, get) => {
  const { value } = e.target;

  if (value.length > 0) {
    // Remove the old object from the array
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: result?.startUpURl[index]?.url
      })
    });

    // Add the updated object to the array
    updateDoc(
      doc(db, "users", userUid),
      {
        startUpURl: arrayUnion({
          url: result?.startUpURl[index]?.url,
          note: value
        })
      },
      { merge: true }
    );
    setTimeout(() => {
      handleReload();
      get();
    }, 1500);
  }
};

const handleStartupDelete = (index, result, userUid, handleReload, get) => {
  let it = result?.startUpURl[index];
  if (
    it.url &&
    it.note &&
    it.currentMRR &&
    it.currentMRRshow &&
    it.statusValue &&
    it.statusShow
  ) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: it.url,
        note: it.note,
        currentMRR: it.currentMRR,
        currentMRRshow: it.currentMRRshow,
        statusValue: it.statusValue,
        statusShow: it.statusShow
      })
    });
  }

  if (it.url && it.note && it.currentMRR && it.currentMRRshow) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: it.url,
        note: it.note,
        currentMRR: it.currentMRR,
        currentMRRshow: it.currentMRRshow
      })
    });
  }

  if (it.url && it.note) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: it.url,
        note: it.note
      })
    });
  }

  if (it.url) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: it.url
      })
    });
  }
  setTimeout(() => {
    handleReload();
    get();
  }, 1500);
};

const currentMRROfStartupShow = (e, index, userUid, result, handleReload, get) => {
  const { checked } = e.target;
  const currentMRR =
    e.target.parentNode.parentNode.parentNode.children[0].children[1]
      .children[1].value;
  // console.log(currentMRR)
  if (checked && currentMRR) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: result?.startUpURl[index]?.url,
        note: result?.startUpURl[index]?.note
      })
    });

    // Add the updated object to the array
    updateDoc(
      doc(db, "users", userUid),
      {
        startUpURl: arrayUnion({
          url: result?.startUpURl[index]?.url,
          note: result?.startUpURl[index]?.note,
          currentMRR: currentMRR,
          currentMRRshow: checked
        })
      },
      { merge: true }
    );
    setTimeout(() => {
      handleReload();
      get();
    }, 1500);
  }
};

const startUpStatusShow = (e, index, userUid, result, handleReload, get) => {
  const { checked } = e.target;
  const statusValue =
    e.target.parentNode.parentNode.parentNode.children[0].children[1].value;
  // console.log(statusValue)
  if (checked && statusValue.length > 0) {
    updateDoc(doc(db, "users", userUid), {
      startUpURl: arrayRemove({
        url: result?.startUpURl[index]?.url,
        note: result?.startUpURl[index]?.note,
        currentMRR: result?.startUpURl[index]?.currentMRR,
        currentMRRshow: result?.startUpURl[index]?.currentMRRshow
      })
    });

    // Add the updated object to the array
    updateDoc(
      doc(db, "users", userUid),
      {
        startUpURl: arrayUnion({
          url: result?.startUpURl[index]?.url,
          note: result?.startUpURl[index]?.note,
          currentMRR: result?.startUpURl[index]?.currentMRR,
          currentMRRshow: result?.startUpURl[index]?.currentMRRshow,
          statusValue: statusValue,
          statusShow: checked
        })
      },
      { merge: true }
    );
    setTimeout(() => {
      handleReload();
      get();
    }, 1500);
  }
};

const handleChange = (e, setInputValues) => {
  const { name, value } = e.target;
  setInputValues((prevState) => ({
    ...prevState,
    [name]: value
  }));
};

const currentMRROfStartup = (e, setCurrentMRRValues) => {
  const { name, value } = e.target;
  setCurrentMRRValues((prevState) => ({
    ...prevState,
    [name]: value
  }));
  // console.log(`Input ${index} changed to ${value}`);
};

export {
  provideIcon,
  provideURL,
  extractDomainName,
  getFavicon,
  formatNumber,
  handleOnBlur,
  handleStartupDelete,
  currentMRROfStartupShow,
  startUpStatusShow,
  handleChange,
  currentMRROfStartup
};
