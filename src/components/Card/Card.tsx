import classNames from "classnames";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import HomeBreadCrumb from "./HomeBreadCrumb";
import { IBreadcrumb } from "types";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

type CardProps = {
  children: React.ReactNode;
  breadcrumbs: IBreadcrumb[];
  isLoading?: boolean;
};

const Card: React.FC<CardProps> = ({ children, breadcrumbs, isLoading }) => {
  const navigate = useNavigate();

  return (
    <section className="card">
      {isLoading && <Loader />}
      <nav className="cardNav" aria-label="Breadcrumb">
        <ol className="list">
          {breadcrumbs.map((breadcrumb) => {
            const itemClassName = classNames("navItem", {
              hover: breadcrumb.isHover,
            });

            return breadcrumb.isHome ? (
              <HomeBreadCrumb
                link={breadcrumb?.link}
                key={breadcrumb.id}
                isHover={Boolean(breadcrumb.isHover)}
              />
            ) : (
              <li key={breadcrumb.id}>
                <section className="navItemWrapper">
                  <HiChevronRight aria-hidden="true" className="chevronRight" />

                  <button
                    onClick={() => breadcrumb.link && navigate(breadcrumb.link)}
                    className={itemClassName}
                    tabIndex={breadcrumb.isHover ? 1 : -1}
                  >
                    {breadcrumb.title}
                  </button>
                </section>
              </li>
            );
          })}
        </ol>
      </nav>

      {!isLoading && <section className="content">{children}</section>}
    </section>
  );
};

export default Card;
