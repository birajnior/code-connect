"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import style from "./pagination.module.css";

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}`, { scroll: false });
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      {page > 1 && (
        <Link
          href={`?page=${page - 1}`}
          className={`btn mx-2 ${style.btnEstilizado}`}
        >
          Página Anterior
        </Link>
      )}
      {/* <span className="mx-3">
        Página {page} de {totalPages}
      </span> */}
      {page < totalPages && (
        <Link
          href={`?page=${page + 1}`}
          className={`btn mx-2 ${style.btnEstilizado}`}
        >
          Próxima Página
        </Link>
      )}
    </div>
  );
}
