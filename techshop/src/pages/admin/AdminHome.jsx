import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div className="center">
      <Button as={Link} to= "/admin/maintain-categories" type="submit">{t("maintain-categories")}</Button>{' '}
      <Button as={Link} to= "/admin/maintain-shops" type="button" value="maintain-shops">{t("maintain-shops")}</Button>{' '}
      <Button as={Link} to= "/admin/add-product" type="submit" value="add-product"> {t("add-product")}</Button>{' '}
      <Button as={Link} to= "/admin/maintain-product" type="reset" value="maintain-products"> {t("maintain-products")}</Button>{' '}
    </div>
  )
}

export default AdminHome;

