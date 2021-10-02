import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAsterisk, faBell, faHamburger, faMoneyBill, faTrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CategoryIconProps {
  category: string | null;
}

enum Category {
  FOOD = 'food',
  UTILITY_BILL = 'utility bill',
  SUBSCRIPTION = 'subscription',
  TRANSPORTATION = 'transportation',
  OTHER = 'other'
}

const CategoryIcon = ({ category } : CategoryIconProps) => {

  const getIcon = (): IconProp => {
    switch (category) {
      case Category.FOOD:
        return faHamburger;
      case Category.UTILITY_BILL:
        return faMoneyBill;
      case Category.SUBSCRIPTION:
        return faBell;
      case Category.TRANSPORTATION:
        return faTrain;
      case Category.OTHER:
        return faAsterisk;
      default:
        return faHamburger;
    }
  }

  return (
    <FontAwesomeIcon icon={getIcon()} size="lg" />
  )
}

export default CategoryIcon;
