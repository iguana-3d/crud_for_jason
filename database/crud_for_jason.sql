-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Jun-2020 às 22:10
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `crud_for_jason`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_crud`
--

CREATE TABLE `user_crud` (
  `id_user` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` smallint(2) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cep` varchar(11) NOT NULL,
  `state` varchar(20) NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user_crud`
--

INSERT INTO `user_crud` (`id_user`, `name`, `age`, `email`, `cep`, `state`, `last_updated`) VALUES
(1, 'iguana', 26, 'igor.cordeiro2016@outlook.com', '', 'Acre', '2020-06-16 15:31:20'),
(2, 'iguana', 26, 'igor.cordeiro2016@outlook.com', '', 'Acre', '2020-06-16 15:33:14'),
(3, 'jason', 25, 'jason@gmail.com', '04233-220', 'Acre', '2020-06-16 15:33:36'),
(4, 'teste', 0, '', '', 'Acre', '2020-06-16 16:25:54'),
(5, 'iguana', 0, '', '', 'Acre', '2020-06-16 16:27:14'),
(6, '', 0, '', '', 'Acre', '2020-06-17 19:46:09');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `user_crud`
--
ALTER TABLE `user_crud`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `user_crud`
--
ALTER TABLE `user_crud`
  MODIFY `id_user` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
